import { ToDo } from "..";
import "./TaskView.css"

interface ITask {

}

const createTaskView = (toDo: ToDo, callBack: (id: string) => void) => {
    const taskListView = document.querySelector('.taskListView')!
    
    const task = document.createElement('div')!
    task.className = 'task'
    task.addEventListener('click',()=>{callBack(toDo.id)})

    const title = document.createElement('p')!
    title.className = 'title'
    title.textContent = toDo.title

    const project = document.createElement('p')!
    project.className = 'project'
    project.textContent = toDo.project

    const date = document.createElement('p')!
    date.className = 'date'
    date.textContent = toDo.dueDate.toDateString()

    const trashCan = document.createElement('div')!
    trashCan.className = 'trashCan'

    task.appendChild(title)
    task.appendChild(project)
    task.appendChild(date)
    task.appendChild(trashCan)

    taskListView.appendChild(task)
}

export default createTaskView