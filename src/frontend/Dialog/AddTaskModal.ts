import { NewToDo } from "../.."
import createPriorityBox from "./PriorityBox"
import createProjectBox from "./ProjectBox"

export interface AddTaskModalView {
    // dialog: HTMLDialogElement
    // modal: HTMLFormElement
    // addTaskButton: HTMLButtonElement
    // cancelButton: HTMLButtonElement
    open: () => void
    // getInput: () => NewToDo
    close: () => void
    bindGetProjectNames: (callBack: () => string[]) => void
    // bindOnAddTaskButtonClick: () => void
    // OnAddTaskButtonClick: () => void
}

const createAddTaskModal = (): AddTaskModalView => {

    const dialog = document.querySelector("dialog")!
    const form = document.createElement('form')!
    let addTaskButton: HTMLButtonElement
    let cancelButton: HTMLButtonElement

    form.className = 'addModal modal'

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

    addTaskButton = document.createElement('button')!
    addTaskButton.className = 'addTaskButton'
    // addTaskButton.addEventListener('click', addTaskButtonHandler)

    cancelButton = document.createElement('button')!
    cancelButton.className = 'cancelButton'
    // cancelButton.addEventListener('click', cancelButtonHandler)

    const open = () => {
        if (getProjectNames === null) return
        const projectNames: string[] = getProjectNames()
        dialog.replaceChildren(form)
        projectBox.setProjectNamesOnOpen(projectNames)
        dialog.showModal()
    }

    const close = () => dialog.close()

    let getProjectNames: null | (() => string[]) = null

    const bindGetProjectNames = (callBack: () => string[]) => getProjectNames = callBack


    // const getInput = (): NewToDo => {
    //     const title = titleInput.value
    //     const description = descripText.value
    //     const dueDate = new Date(dateInput.value)
    //     const project = projectBox
    //     const priority = priorityBox.priorityText.textContent === "None" ? 0 : priorityBox.priorityText.textContent === "Low" ? 1 : 2
    //     if (!description) return { title, dueDate, project, priority }

    //     return { title, description, }
    // }

    return { open, close, bindGetProjectNames }
}

export default createAddTaskModal