import { NewToDo, ToDo } from "../types"
import dialogManager from "./Dialog"
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

    let isCurrentTaskCompleted: boolean

    const dialog = dialogManager.getDialog()
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
        dialogManager.closeDialog()
    }

    cancelButton.addEventListener('click', close)

    const clearInputs = () => {
        titleInput.value = ''
        descripText.value = ''
        dateInput.value = ''
        priorityBox.resetPriority()
    }

    let getProjectNames: null | (() => string[]) = null

    const bindGetProjectNames = (callBack: () => string[]) => getProjectNames = callBack

    let editTask: null | (() => void) = null

    const bindEditTask = (handler: (id: string, todo: NewToDo) => void, id: string) => {

        if (editTask) editTaskButton.removeEventListener('click', editTask)

        editTask = () => {
            const newToDo = getInput()
            handler(id, newToDo)
            close()
        }

        editTaskButton.addEventListener('click', editTask)
    }

    const setInput = (todo: ToDo) => {
        titleInput.value = todo.title
        if (todo.description) descripText.value = todo.description
        dateInput.value = todo.dueDate
        priorityBox.setPriority(todo.priority)
        projectBox.setSelectedProjectNameOnOpen(todo.project)
        isCurrentTaskCompleted = todo.isCompleted
        console.log(todo)
    }


    const getInput = (): NewToDo => {
        const title = titleInput.value
        const description = descripText.value
        const dueDate = dateInput.value
        const project = projectBox.getSelectedProjectName()
        const priority = priorityBox.getPriority()
        if (!description) return { title, dueDate, project, priority, isCompleted: isCurrentTaskCompleted }

        return { title, description, dueDate, project, priority, isCompleted: isCurrentTaskCompleted }
    }

    return { open, close, bindGetProjectNames, bindEditTask, setInput }
}

export default createEditTaskModal