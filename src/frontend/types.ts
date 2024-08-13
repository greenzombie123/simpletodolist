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