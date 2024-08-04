import { NewToDo, ToDo } from "../.."
import createPriorityBox from "./PriorityBox"
import createProjectBox from "./ProjectBox"

export interface EditTaskModalView {
    open: () => void
    close: () => void
    bindGetProjectNames: (callBack: () => string[]) => void
    bindEditTask: (handler: (id: string, todo: NewToDo) => void, id: string) => void
    setInput: (todo: ToDo) => void
}

const createEditTaskModal = (): EditTaskModalView => {

    const dialog = document.querySelector("dialog")!
    const form = document.createElement('form')!
    let editTaskButton: HTMLButtonElement
    let cancelButton: HTMLButtonElement

    form.className = 'editTaskModal modal'

    const titleLabel = document.createElement('label')!
    titleLabel.className = 'titleLabel'
    titleLabel.textContent = "Title"
    form.appendChild(titleLabel)

    const titleInput = document.createElement('input')!
    titleInput.id = 'titleInput'
    titleLabel.appendChild(titleInput)

    const descriptLabel = document.createElement('label')!
    descriptLabel.className = 'descriptLabel'
    descriptLabel.textContent = "Description"
    form.appendChild(descriptLabel)

    const descripText = document.createElement('textarea')!
    descripText.id = 'descriptTextArea'
    descriptLabel.appendChild(descripText)

    const dateContainer = document.createElement('div')!
    dateContainer.className = 'dateContainer'
    form.appendChild(dateContainer)

    const dateLabel = document.createElement('label')!
    dateLabel.className = 'dateLabel'
    dateLabel.textContent = "Date"
    dateContainer.appendChild(dateLabel)

    const dateInput = document.createElement('input')!
    dateInput.type = "date"
    dateInput.className = 'dateInput'
    dateLabel.appendChild(dateInput)

    const priorityBox = createPriorityBox()
    form.appendChild(priorityBox.priorityDiv)

    const projectBox = createProjectBox()
    form.appendChild(projectBox.projectBox)

    editTaskButton = document.createElement('button')!
    editTaskButton.className = 'addTaskButton'
    editTaskButton.textContent = 'Edit'
    editTaskButton.type = "button"
    form.appendChild(editTaskButton)

    cancelButton = document.createElement('button')!
    cancelButton.className = 'cancelButton'
    cancelButton.textContent = 'Cancel'
    cancelButton.type = "button"
    form.appendChild(cancelButton)

    const open = () => {
        if (getProjectNames === null) return
        const projectNames: string[] = getProjectNames()
        dialog.replaceChildren(form)
        projectBox.setProjectNamesOnOpen(projectNames)
        dialog.showModal()
    }

    const close = () => {
        clearInputs()
        dialog.close()
    }

    cancelButton.addEventListener('click', close)
    dialog.addEventListener('click', (e: Event) => {
        if (e.target === dialog) close()
    })

    const clearInputs = () => {
        titleInput.value = ''
        descripText.value = ''
        dateInput.value = ''
        priorityBox.resetPriority()
    }

    let getProjectNames: null | (() => string[]) = null

    const bindGetProjectNames = (callBack: () => string[]) => getProjectNames = callBack

    const bindEditTask = (handler: (id: string, todo: NewToDo) => void, id: string) => {

        const editTask = () => {
            const newToDo = getInput()
            handler(id, newToDo)
            close()
        }

        editTaskButton.addEventListener('click', () => {
            editTask()
        }, { once: true })
    }

    const setInput = (todo: ToDo) => {
        titleInput.value = todo.title
        if (todo.description) descripText.value = todo.description
        dateInput.value = todo.dueDate.toISOString().slice(0, 10)
        priorityBox.setPriority(todo.priority)
    }


    const getInput = (): NewToDo => {
        const title = titleInput.value
        const description = descripText.value
        const dueDate = new Date(dateInput.value)
        const project = projectBox.getSelectedProjectName()
        const priority = priorityBox.getPriority()
        if (!description) return { title, dueDate, project, priority }

        return { title, description, dueDate, project, priority }
    }

    return { open, close, bindGetProjectNames, bindEditTask, setInput }
}

export default createEditTaskModal