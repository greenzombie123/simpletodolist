import { v4 as uuidv4 } from 'uuid'
import App from './frontend/App';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


export interface ToDo {
    title: string,
    description?: string,
    dueDate: string,
    priority: Priority,
    project: string,
    id: string,
    isCompleted: boolean
}


export interface NewToDo {
    title: string,
    description?: string,
    dueDate: string,
    priority: Priority,
    project: string,
    isCompleted: boolean
}

export enum Priority {
    None,
    Low,
    High
}

export interface ToDoApp {
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    addTask: (todo: NewToDo) => void
    editTask: (id: string, todo: NewToDo) => void
    deleteTask: (id: string) => void
    updateTasksForDeletedProject: (projectName: string) => void
    getCurrentTasks: (projectName: string) => ToDo[]
    getCurrentProject: () => string
    setCurrentProject: (projectName: string) => void
    setCurrentTasks: (projectName: string) => void
    initialize: () => void
    getProjectNames: () => string[]
    bindOnProjectListChanged: (callBack: (projectList: string[]) => void) => void
    bindOnTaskListChanged: (callback: (taskList: ToDo[], project: string) => void) => void
    moveToPreviousProject: (currentProject: string) => void
}

const toDoApp: ToDoApp = (() => {

    let tasks: ToDo[] = []
    let currentTasks: ToDo[] = []
    let projects: string[] = ['Inbox', 'Today', 'Ice', 'School']
    let currentProject: string


    const addProject = (projectName: string) => {
        if (isProjectNameUnique(projectName)) projects = [...projects, projectName]

        if (onProjectListChanged !== null) {
            const projectList = getProjectNames()
            onProjectListChanged(projectList)
        }
    }

    const isProjectNameUnique = (projectName: string) => {
        return projects.some(project => project !== projectName)
    }

    const deleteProject = (projectName: string) => {
        if (projectName === "Inbox" || projectName === "Today") return
        let newProjectList: string[] = []
        projects.forEach(project => {
            if (projectName !== project) newProjectList.push(project)
        })

        projects = [...newProjectList]
    }

    const addTask = (todo: NewToDo) => {
        const id = uuidv4()
        tasks.push({ ...todo, id })

        setCurrentTasks(getCurrentProject())
    }

    const editTask = (id: string, todo: NewToDo) => {

        const newTasks: ToDo[] = tasks.map(task => {
            if (id === task.id) return { ...todo, id }
            else return task
        })

        tasks = [...newTasks]

        setCurrentTasks(getCurrentProject())
    }

    const deleteTask = (id: string) => {
        let newTasks: ToDo[] = []

        tasks.forEach(task => {
            if (id !== task.id) newTasks.push(task)
        })

        tasks = [...newTasks]

        setCurrentTasks(getCurrentProject())
    }

    const getAllTasks = () => tasks

    const getProjectNames = () => projects

    const getTasksByProject = (projectName: string) => {
        const tasks: ToDo[] = getAllTasks()
        return tasks.filter(task => task.project === projectName)
    }

    const updateTasksForDeletedProject = (projectName: string) => {

        tasks = tasks.map(task => {
            if (task.project === projectName) return { ...task, project: "Inbox" }
            else return task
        })

        if (onTaskListChanged) onTaskListChanged(getTasksByProject(getCurrentProject()), getCurrentProject())
        if (onProjectListChanged) onProjectListChanged(getProjectNames())
    }

    const moveToPreviousProject = (currentProject: string) => {
        if (!isNotCurrentProject(currentProject)) return
        const projects = getProjectNames()
        const index = projects.findIndex(project => project === currentProject)
        const previousProject = projects[index - 1]
        if (previousProject === "Today") setCurrentProject("Today")
        else setCurrentProject(previousProject)
    }

    const isNotCurrentProject = (currentProject: string) => currentProject === getCurrentProject()

    const getCurrentTasks = () => currentTasks

    const getCurrentProject = () => currentProject

    const isProjectThere = (projectName: string) => {
        return projects.some(project => project === projectName)
    }

    const setCurrentProject = (projectName: string) => {
        if (isProjectThere(projectName)) currentProject = projectName

        if (onProjectListChanged !== null) {
            const projectList = getProjectNames()
            onProjectListChanged(projectList)
        }
    }

    const isNewCurrentProjectToday = (projectName: string) => projectName === "Today"

    const setCurrentTasksByToday = () => {
        currentTasks = tasks.filter(task =>
            task.dueDate === new Date().toISOString().slice(0, 10)
        )
    }

    const setCurrentTasks = (projectName: string) => {

        setCurrentProject(projectName)

        if (isNewCurrentProjectToday(projectName)) setCurrentTasksByToday() //*DONE
        else currentTasks = tasks.filter(task => task.project === projectName)


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
        tasks.push({ title: "Do the dishes", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        tasks.push({ title: "Do the dishes now", dueDate: "2024-08-10", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        tasks.push({ title: "Do the dishes yesterday", dueDate: "2025-12-11", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        tasks.push({ title: "Do the dishes today!", dueDate: "2024-02-27", priority: Priority.High, project: "School", id: uuidv4(), isCompleted: false })
        tasks.push({ title: "Do the dishes today!", dueDate: "2024-05-02", priority: Priority.Low, project: "Ice", id: uuidv4(), isCompleted: false })


        setCurrentProject("Inbox")
        setCurrentTasks("Inbox")
    }

    return {
        addProject, deleteProject, initialize, getProjectNames, getCurrentProject, getCurrentTasks,
        editTask, addTask, deleteTask, getTasksByProject, setCurrentProject,
        setCurrentTasks, bindOnProjectListChanged, bindOnTaskListChanged, updateTasksForDeletedProject,
        moveToPreviousProject
    }

})()

const app = App(toDoApp)

app.initialize()


