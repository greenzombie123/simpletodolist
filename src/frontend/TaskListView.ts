import createTaskView from './TaskView'
import './TaskListView.css'
import { ToDo } from './types'

export interface TaskListView {
    render: (tasks: ToDo[], projectName: string) => void
    bindOpenEditTask: (handler: (todo: ToDo) => void) => void
    bindDeleteTask: (handler: (id: string) => void) => void
    bindCompleteTask: (handler: (id: string) => void) => void
}

const createTaskListView = (): TaskListView => {
    const projectHeading = document.querySelector('.projectHeading')!
    const taskListView = document.querySelector('.taskListView')!

    const render = (tasks: ToDo[], projectName: string) => {
        projectHeading.textContent = projectName
        while (taskListView.firstChild) { taskListView.removeChild(taskListView.firstChild!) }
        tasks.forEach(task => {
            createTaskView(
                task,
                () => { if (openEditTask) openEditTask(task) },
                () => { if (deleteTask) deleteTask(task.id) },
                () => { if (completeTask) completeTask(task.id) })
        })
    }

    let openEditTask: null | ((todo: ToDo) => void) = null

    const bindOpenEditTask = (handler: (toDo: ToDo) => void) => { openEditTask = handler }

    let deleteTask: null | ((id: string) => void) = null

    const bindDeleteTask = (handler: (id: string) => void) => { deleteTask = handler }

    let completeTask: null | ((id: string) => void) = null

    const bindCompleteTask = (handler: (id: string) => void) => { completeTask = handler }

    return { bindOpenEditTask, render, bindDeleteTask, bindCompleteTask }
}

export default createTaskListView

