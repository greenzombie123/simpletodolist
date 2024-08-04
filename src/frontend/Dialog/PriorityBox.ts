import { Priority } from "../.."

interface PriorityBox {
    priorityDiv: HTMLDivElement
    getPriority: () => Priority
}

const createPriorityBox = (): PriorityBox => {

    const priorityDiv = document.createElement('div')!
    priorityDiv.className = 'priorityDiv'

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

    const increasePriority = () => {
        const priority = priorityText.textContent
        priorityText.textContent = priority === "None" ? "Low" : "High"
    }

    const decreasePriority = () => {
        const priority = priorityText.textContent
        priorityText.textContent = priority === "High" ? "Low" : "None"
    }

    const getPriority = () => priorityText.textContent === "None" ?
        Priority.None : priorityText.textContent === "Low" ?
            Priority.Low : Priority.High

    priorityLeftButton.addEventListener("click", decreasePriority)
    priorityRightButton.addEventListener("click", increasePriority)

    return { priorityDiv, getPriority }
}

export default createPriorityBox