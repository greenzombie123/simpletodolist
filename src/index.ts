import { v4 as uuidv4 } from 'uuid'
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

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
    getTasksByProject: (projectName: string) => ToDo[]
    getTasksByToday: () => ToDo[]
    getTasksByInbox: () => ToDo[]
    getAllTasks: () => ToDo[]
}

interface TaskManager {
    tasks: ToDo[]
    addTask: (todo: ToDo) => void
    editTask: (todo: ToDo) => void
    deleteTask: (id: string) => void
    getAllTasks: () => ToDo[]
}

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

interface ToDo {
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    project: string,
    id: string
}
