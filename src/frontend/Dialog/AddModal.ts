const AddTaskModal = (
    addTaskButtonHandler: () => void,
    cancelButtonHandler: () => void
): HTMLFormElement => {

    const form = document.createElement('form')!
    form.className = 'addModal'

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

    const priorityDiv = document.createElement('div')!
    priorityDiv.className = 'priorityDiv'
    form.appendChild(priorityDiv)

    const priorityLabel = document.createElement('label')!
    priorityLabel.className = 'priorityLabel'
    priorityLabel.textContent = 'Priority'
    priorityDiv.appendChild(priorityLabel)

    const priorityText = document.createElement('p')!
    priorityText.className = 'priorityText'
    priorityText.textContent = "None"
    priorityDiv.appendChild(priorityText)

    const priorityLeftButton = document.createElement('button')!
    priorityLeftButton.className = 'priorityLeftButton'
    priorityLeftButton.type = "button"
    priorityDiv.appendChild(priorityLeftButton)

    const priorityRightButton = document.createElement('button')!
    priorityRightButton.className = 'priorityRightButton'
    priorityRightButton.type = "button"
    priorityDiv.appendChild(priorityRightButton)

    const addTaskButton = document.createElement('button')!
    addTaskButton.className = 'addTaskButton'
    addTaskButton.addEventListener('click', addTaskButtonHandler)

    const cancelButton = document.createElement('button')!
    cancelButton.className = 'cancelButton'
    cancelButton.addEventListener('click', cancelButtonHandler)

    

    return form
}

export default AddTaskModal