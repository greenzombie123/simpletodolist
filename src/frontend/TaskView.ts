import "./TaskView.css"
import { Priority, ToDo } from "./types"

const createTaskView = (
    toDo: ToDo,
    callBack: (todo: ToDo) => void,
    handleDeleteTask: (id: string) => void,
    handleCompleteTask: (id: string) => void
) => {

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

    const checkMark = createCheckMarkSVG(toDo, handleCompleteTask, task)

    task.appendChild(title)
    task.appendChild(project)
    task.appendChild(date)
    task.appendChild(trashCan)
    task.appendChild(checkMark.svg)

    taskListView.appendChild(task)
}

const createCheckMarkSVG = (todo: ToDo, handleCompleteTask: (id: string) => void, task:HTMLDivElement) => {

    let isCurrentTaskCompleted = todo.isCompleted

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 24 24")
    svg.id = "checkMark"

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
    path.setAttribute("d", "M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z")
    path.setAttribute("fill", "gray")

    svg.appendChild(path)

    const changeColor = () => {
        if (isCurrentTaskCompleted) {
            path.setAttribute("fill", "#f4d62c")
            task.style.backgroundColor = "#f4d62c"
        }
        else {
            path.setAttribute("fill", "gray")
            task.style.backgroundColor = ""
        }
    }

    const toggleTask = () => { isCurrentTaskCompleted ? isCurrentTaskCompleted = false : isCurrentTaskCompleted = true }

    svg.addEventListener('click', (e: Event) => {
        e.stopPropagation()
        handleCompleteTask(todo.id)
        toggleTask()
        changeColor()
    })

    changeColor()

    return { svg }

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>
}


export default createTaskView