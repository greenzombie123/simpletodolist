import { v4 as uuidv4 } from 'uuid'
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


interface ToDo {
    title: string,
    description?: string,
    dueDate: Date,
    priority: Priority,
    project: string,
    id: string
}

// Used for parameters when creating new tasks or editing a task. ID is added later.
interface NewToDo {
    title: string,
    description?: string,
    dueDate: Date,
    priority: Priority,
    project: string
}
interface ToDoApp {
    taskManager: TaskManager
    projectManager: ProjectManager
    taskSearcher: TaskSearcher
    currentProject: string
    renderTasksByProject: (projectName: string) => void
    renderTasksByToday: () => void
    renderTasksByInbox: () => void
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    showProjectNames: () => void
    addTask: (todo: ToDo) => void
    editTask: (todo: ToDo) => void
    deleteTask: (id: string) => void
    initialize: () => void
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
    projects: string[]
    addProject: (name: string) => void
    deleteProject: (name: string) => void
    isProjectThere: (name: string) => boolean
    getProjectNames: () => string[]
}

enum Priority {
    None,
    Low,
    High
}


taskManager.addTask({ title: "Do the dishes", description: "Do it soon!", dueDate: new Date(), priority: Priority.None, project: "inbox" })
taskManager.addTask({ title: "Do the dishes now", dueDate: new Date(), priority: Priority.None, project: "inbox" })
taskManager.addTask({ title: "Do the dishes yesterday", dueDate: new Date("December 17, 2024 03:24:00"), priority: Priority.None, project: "inbox" })
taskManager.addTask({ title: "Do the dishes today!", dueDate: new Date("July 30, 2024 03:24:00"), priority: Priority.Low, project: "school" })
console.log(taskManager.getAllTasks())
console.log(taskSearcher.getTasksByToday(taskManager.tasks))
const g = taskManager.getAllTasks()

