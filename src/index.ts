import { NewToDo, ToDo } from './frontend/types';
import { v4 as uuidv4 } from 'uuid'
import App from './frontend/App';
import databaseManager from './frontend/database';

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
    toggleTaskCompletion: (id: string) => void
    getCurrentTask: (id: string) => ToDo
}

const toDoApp: ToDoApp = (() => {

    // let tasks: ToDo[] = []
    // let currentTasks: ToDo[] = []
    // let projects: string[] = ['Inbox', 'Today', 'Ice', 'School']
    // let currentProject: string

    let tasks: ToDo[] = databaseManager.getTasks()
    let currentTasks: ToDo[] = []
    let projects: string[] = databaseManager.getProjects()
    let currentProject: string


    const addProject = (projectName: string) => {
        if (isProjectNameUnique(projectName)) projects = [...projects, projectName]

        if (onProjectListChanged !== null) {
            const projectList = getProjectNames()
            onProjectListChanged(projectList)
        }

        databaseManager.setProjects(projects)
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

        if (onProjectListChanged) onProjectListChanged(getProjectNames())

        databaseManager.setProjects(projects)
    }

    const addTask = (todo: NewToDo) => {
        const id = uuidv4()
        tasks.push({ ...todo, id })

        setCurrentTasks(getCurrentProject())

        databaseManager.setTasks(tasks)
    }

    const editTask = (id: string, todo: NewToDo) => {

        const newTasks: ToDo[] = tasks.map(task => {
            if (id === task.id) return { ...todo, id }
            else return task
        })

        tasks = [...newTasks]

        setCurrentTasks(getCurrentProject())

        databaseManager.setTasks(tasks)
    }

    const deleteTask = (id: string) => {
        let newTasks: ToDo[] = []

        tasks.forEach(task => {
            if (id !== task.id) newTasks.push(task)
        })

        tasks = [...newTasks]

        setCurrentTasks(getCurrentProject())

        databaseManager.setTasks(tasks)
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

        databaseManager.setTasks(tasks)
    }

    const moveToPreviousProject = (currentProject: string) => {
        console.log(currentProject)
        if (isProjectNotCurrentProject(currentProject)) return
        const projects = getProjectNames()
        const index = projects.findIndex(project => project === currentProject)
        const previousProject = projects[index - 1]
        if (previousProject === "Today") {
            setCurrentProject("Today")
        }
        else {
            setCurrentProject(previousProject)
        }
    }

    const isProjectNotCurrentProject = (currentProject: string) => currentProject !== getCurrentProject()

    const getCurrentTasks = () => currentTasks

    const getCurrentProject = () => currentProject

    const isProjectThere = (projectName: string) => {
        return projects.some(project => project === projectName)
    }

    const setCurrentProject = (projectName: string) => {
        if (isProjectThere(projectName)) currentProject = projectName
    }

    const isNewCurrentProjectToday = (projectName: string) => projectName === "Today"

    const setCurrentTasksByToday = () => {
        currentTasks = tasks.filter(task =>
            task.dueDate === new Date().toISOString().slice(0, 10)
        )
    }

    const toggleTaskCompletion = (id: string) => {
        tasks = tasks.map(task => {
            if (task.id === id) return { ...task, isCompleted: (task.isCompleted ? false : true) }
            else return task
        })

        databaseManager.setTasks(tasks)
    }

    const getCurrentTask = (id: string) => tasks.find(task => task.id === id)!

    const setCurrentTasks = (projectName: string) => {

        if (isNewCurrentProjectToday(projectName)) setCurrentTasksByToday()
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
        // tasks.push({ title: "Do the dishes", dueDate: "2024-08-10", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Clean your room", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Buy some eggs", dueDate: "2025-12-11", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Pay taxes", dueDate: "2024-02-27", priority: Priority.High, project: "School", id: uuidv4(), isCompleted: false })
        // tasks.push({ title: "Call mom", dueDate: "2024-05-02", priority: Priority.Low, project: "Ice", id: uuidv4(), isCompleted: false })


        setCurrentProject("Inbox")
        if (onProjectListChanged) onProjectListChanged(getProjectNames())
        setCurrentTasks("Inbox")
    }

    return {
        addProject, deleteProject, initialize, getProjectNames, getCurrentProject, getCurrentTasks,
        editTask, addTask, deleteTask, getTasksByProject, setCurrentProject,
        setCurrentTasks, bindOnProjectListChanged, bindOnTaskListChanged, updateTasksForDeletedProject,
        moveToPreviousProject, toggleTaskCompletion, getCurrentTask
    }

})()

const app = App(toDoApp)

app.initialize()


