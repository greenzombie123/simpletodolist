import { ToDo } from '..'
import Task from './Task'
import './TaskListView.css'

const TaskListView = (todoList: ToDo[], project: string, callBack: (id: string) => void) => {
    const projectHeading = document.querySelector('.projectHeading')!
    const taskListView = document.querySelector('.taskListView')!

    const renderToDoList = (tasks:ToDo[], projectName:string)=>{
        projectHeading.textContent = projectName
        taskListView.replaceWith(taskListView.cloneNode(true))
        taskListView.textContent = ""
        tasks.forEach(task=>{
            Task(task, callBack)
        })
    }

    renderToDoList(todoList, project)
}

export default TaskListView

