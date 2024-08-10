import { Priority, ToDo } from "..";
import "./TaskView.css"


const createTaskView = (toDo: ToDo, callBack: (todo: ToDo) => void, handleDeleteTask: (id: string) => void) => {
    const taskListView = document.querySelector('.taskListView')!

    const task = document.createElement('div')!
    task.className = 'task'
    task.style.border = toDo.priority === Priority.High ? "3px solid red" :
        toDo.priority === Priority.Low ? "2px solid orange" : "1px solid black"
    task.addEventListener('click', (e: Event) => {
        if (e.currentTarget === task) callBack(toDo)
    })

    const title = document.createElement('p')!
    title.className = 'title'
    title.textContent = toDo.title

    const project = document.createElement('p')!
    project.className = 'project'
    project.textContent = toDo.project

    const date = document.createElement('p')!
    date.className = 'date'
    date.textContent = new Date(toDo.dueDate).toDateString()

    const trashCan = document.createElement('div')!
    trashCan.addEventListener('click', (e: Event) => {
        if (e.target === trashCan) {
            e.stopPropagation()
            handleDeleteTask(toDo.id)
        }
    })
    trashCan.className = 'trashCan'

    task.appendChild(title)
    task.appendChild(project)
    task.appendChild(date)
    task.appendChild(trashCan)

    taskListView.appendChild(task)
}

export default createTaskView