import { ToDo } from '..'
import createTaskView from './TaskView'
import './TaskListView.css'

export interface TaskListView{
    render:(tasks: ToDo[], projectName: string)=>void
    bindOnTaskClicked:()=>void
}

const createTaskListView = ():TaskListView => {
    const projectHeading = document.querySelector('.projectHeading')!
    const taskListView = document.querySelector('.taskListView')!

    const render = (tasks: ToDo[], projectName: string) => {
        projectHeading.textContent = projectName
        taskListView.replaceWith(taskListView.cloneNode(true))
        taskListView.textContent = ""
        tasks.forEach(task => {
            createTaskView(task, ()=>console.log(2))
        })
    }

    let onTaskClicked = null
    const bindOnTaskClicked = () => { }

    return {bindOnTaskClicked, render}
}

export default createTaskListView

