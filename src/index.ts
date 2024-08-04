import { v4 as uuidv4 } from 'uuid'
import App from './frontend/App';
import { EventEmitter } from './frontend/eventemitter';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


export interface ToDo {
    title: string,
    description?: string,
    dueDate: Date,
    priority: Priority,
    project: string,
    id: string
}

// Used for parameters when creating new tasks or editing a task. ID is added later.

export interface NewToDo {
    title: string,
    description?: string,
    dueDate: Date,
    priority: Priority,
    project: string
}

export enum Priority {
    None,
    Low,
    High
}

interface TaskSearcher {
    getTasksByProject: (projectName: string, tasks: ToDo[]) => ToDo[]
    getTasksByToday: (tasks: ToDo[]) => ToDo[]
    getTasksByInbox: (tasks: ToDo[]) => ToDo[]
}

const taskSearcher: TaskSearcher = (() => {

    const getTasksByProject = (projectName: string, tasks: ToDo[]) => {
        return tasks.filter(task => task.project === projectName)
    }

    const getTasksByToday = (tasks: ToDo[]) => {
        const today = new Date().toDateString()
        return tasks.filter(task => task.dueDate.toDateString() === today)
    }

    const getTasksByInbox = (tasks: ToDo[]) => {
        return tasks.filter(task => task.project === "inbox")
    }

    return { getTasksByProject, getTasksByInbox, getTasksByToday }
})()


interface TaskManager {
    tasks: ToDo[]
    // currentTasks: ToDo[]
    setCurrentTasks: (projectName: string) => void
    getCurrentTasks: () => ToDo[]
    addTask: (todo: NewToDo) => void
    editTask: (id: string, todo: NewToDo) => void
    deleteTask: (id: string) => void
    getAllTasks: () => ToDo[]
}

const taskManager: TaskManager = (() => {

    let tasks: ToDo[] = []
    let currentTasks: ToDo[] = []

    const getCurrentTasks = () => currentTasks

    const setCurrentTasks = (projectName: string) => {
        currentTasks = tasks.filter(task => task.project === projectName)
    }

    const addTask = (todo: NewToDo) => {
        const id = uuidv4()
        tasks.push({ ...todo, id })
    }

    const editTask = (id: string, todo: NewToDo) => {
        const newTasks: ToDo[] = tasks.map(task => {
            if (id === task.id) return { ...todo, id }
            else return task
        })

        tasks = [...newTasks]
    }

    const deleteTask = (id: string) => {
        let newTasks: ToDo[] = []

        tasks.forEach(task => {
            if (id !== task.id) newTasks.push(task)
        })

        tasks = [...newTasks]
    }

    const getAllTasks = () => tasks

    return { tasks, addTask, editTask, deleteTask, getAllTasks, getCurrentTasks, setCurrentTasks }
})()

interface ProjectManager {
    // currentProject: string
    setCurrentProject: (project: string) => void
    getCurrentProject: () => string
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    isProjectThere: (name: string) => boolean
    getProjectNames: () => string[]
}

const projectManager: ProjectManager = (() => {

    let projects: string[] = ['Inbox', 'Today', 'Ice', 'School']
    let currentProject: string

    const getCurrentProject = () => currentProject

    const setCurrentProject = (project: string) => {
        if (isProjectThere(project)) currentProject = project
    }

    const isProjectThere = (projectName: string) => {
        return projects.some(project => project === projectName)
    }

    const addProject = (projectName: string) => {
        if (isProjectThere(projectName)) projects = [...projects, projectName]
    }

    const deleteProject = (projectName: string) => {
        let newProjectList: string[] = []
        projects.forEach(project => {
            if (projectName !== project) newProjectList.push(project)
        })

        projects = [...newProjectList]
    }

    const getProjectNames = () => projects

    return { addProject, deleteProject, getProjectNames, isProjectThere, getCurrentProject, setCurrentProject }
})()


export interface ToDoApp {
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    addTask: (todo: NewToDo) => void
    editTask: (id: string, todo: NewToDo) => void
    deleteTask: (id: string) => void
    getCurrentTasks: (projectName: string) => ToDo[]
    getCurrentProject: () => string
    setCurrentProject: (projectName: string) => void
    setCurrentTasks: (projectName: string) => void
    initialize: () => void
    getProjectNames: () => string[]
    bindOnProjectListChanged: (callBack: (projectList: string[]) => void) => void
    bindOnTaskListChanged: (callback: (taskList: ToDo[], project: string) => void) => void
}

const toDoApp: ToDoApp = ((tm: TaskManager, pm: ProjectManager, ts: TaskSearcher) => {

    const taskManager: TaskManager = tm
    const projectManager: ProjectManager = pm
    const taskSearcher: TaskSearcher = ts

    const addProject = (name: string) => {
        projectManager.addProject(name)
    }

    const deleteProject = (name: string) => {
        projectManager.deleteProject(name)
    }

    const showProjectNames = () => {
        const projects = projectManager.getProjectNames()
        console.log(projects)
    }

    const addTask = (todo: NewToDo) => {
        taskManager.addTask(todo)

        setCurrentTasks(projectManager.getCurrentProject())

    }

    const editTask = (id: string, todo: NewToDo) => {
        taskManager.editTask(id, todo)
    }

    const deleteTask = (id: string) => {
        taskManager.deleteTask(id)
    }

    const getAllTasks = () => taskManager.getAllTasks()

    const getProjectNames = () => projectManager.getProjectNames()

    const getTasksByProject = (projectName: string) => {
        const tasks: ToDo[] = getAllTasks()
        return taskSearcher.getTasksByProject(projectName, tasks)
    }

    const getCurrentTasks = () => taskManager.getCurrentTasks()
    const getCurrentProject = () => projectManager.getCurrentProject()
    const setCurrentProject = (projectName: string) => {
        projectManager.setCurrentProject(projectName)

        if (onProjectListChanged !== null) {
            const projectList = getProjectNames()
            onProjectListChanged(projectList)
        }
    }
    const setCurrentTasks = (projectName: string) => {
        taskManager.setCurrentTasks(projectName)

        if (onTaskListChanged !== null) {
            const taskList = getCurrentTasks()
            const project = getCurrentProject()
            onTaskListChanged(taskList, project)
        }
    }

    let onProjectListChanged: null | ((projectList: string[]) => void) = null
    const bindOnProjectListChanged = (callback: (projectList: string[]) => void) => { onProjectListChanged = callback }

    let onTaskListChanged: null | ((taskList: ToDo[], project: string) => void) = null
    const bindOnTaskListChanged = (callback: (taskList: ToDo[], project: string) => void) => { onTaskListChanged = callback }


    const initialize = () => {
        taskManager.addTask({ title: "Do the dishes", description: "Do it soon!", dueDate: new Date(), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes now", dueDate: new Date(), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes yesterday", dueDate: new Date("December 17, 2024 03:24:00"), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes today!", dueDate: new Date("July 30, 2024 03:24:00"), priority: Priority.Low, project: "School" })
        taskManager.addTask({ title: "Do the dishes today!", dueDate: new Date("July 30, 2024 03:24:00"), priority: Priority.Low, project: "Ice" })

        setCurrentProject("Inbox")
        setCurrentTasks("Inbox")

        console.log(getCurrentProject())
        console.log(getCurrentTasks())
    }

    return {
        addProject, deleteProject, initialize, getProjectNames, getCurrentProject, getCurrentTasks,
        editTask, addTask, deleteTask, getTasksByProject, setCurrentProject,
        setCurrentTasks, bindOnProjectListChanged, bindOnTaskListChanged
    }

})(taskManager, projectManager, taskSearcher)

const app = App(toDoApp)

app.initialize()

// toDoApp.initialize()

