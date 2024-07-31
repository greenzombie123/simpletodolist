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
    addTask: (todo: NewToDo) => void
    editTask: (id: string, todo: NewToDo) => void
    deleteTask: (id: string) => void
    getAllTasks: () => ToDo[]
}

const taskManager: TaskManager = (() => {

    let tasks: ToDo[] = []

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

    return { tasks, addTask, editTask, deleteTask, getAllTasks }
})()

interface ProjectManager {
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    isProjectThere: (name: string) => boolean
    getProjectNames: () => string[]
}

const projectManager: ProjectManager = (() => {

    let projects: string[] = ['Inbox', 'Today']

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

    return { addProject, deleteProject, getProjectNames, isProjectThere }
})()


export interface ToDoApp {
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    showProjectNames: () => void
    addTask: (todo: NewToDo) => void
    editTask: (id: string, todo: NewToDo) => void
    deleteTask: (id: string) => void
    initialize: () => void
}

const toDoApp: ToDoApp = ((tm: TaskManager, pm: ProjectManager, ts: TaskSearcher) => {

    const taskManager: TaskManager = tm
    const projectManager: ProjectManager = pm
    const taskSearcher: TaskSearcher = ts
    let currentProject = "inbox"
    let currentToDoList: ToDo[] = []

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

    const initialize = () => {
        taskManager.addTask({ title: "Do the dishes", description: "Do it soon!", dueDate: new Date(), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes now", dueDate: new Date(), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes yesterday", dueDate: new Date("December 17, 2024 03:24:00"), priority: Priority.None, project: "Inbox" })
        taskManager.addTask({ title: "Do the dishes today!", dueDate: new Date("July 30, 2024 03:24:00"), priority: Priority.Low, project: "School" })

    }

    return {
        addProject, deleteProject, initialize, getProjectNames,
        editTask, addTask, showProjectNames, deleteTask, getTasksByProject
    }

})(taskManager, projectManager, taskSearcher)

const app = App(toDoApp)

app.initialize()

// toDoApp.initialize()

