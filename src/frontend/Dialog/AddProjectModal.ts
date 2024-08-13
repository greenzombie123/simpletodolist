import dialogManager from "./Dialog"

export interface AddProjectModalView {
    open: () => void
    bindGetProjectNames: (handler: () => string[]) => void
    bindAddProject: (handler: (project: string) => void) => void
}

const createAddProjectModal = (): AddProjectModalView => {

    let currentProjects: string[] = []

    const dialog = dialogManager.getDialog()
    const form = document.createElement('form')!
    let addProjectButton: HTMLButtonElement
    let cancelButton: HTMLButtonElement

    form.className = 'projectModal modal'

    const titleLabel = document.createElement('label')!
    titleLabel.className = 'projectNameLabel'
    titleLabel.textContent = "Type name of new project"
    titleLabel.htmlFor = "projectNameInput"
    form.appendChild(titleLabel)

    const inputWrapper = document.createElement('div')!
    inputWrapper.className = 'projectNameInputWrapper'
    form.appendChild(inputWrapper)

    const projectNameInput = document.createElement('input')!
    projectNameInput.id = 'projectNameInput'
    inputWrapper.appendChild(projectNameInput)

    const warningText = document.createElement('p')!
    warningText.className = 'warningText'
    inputWrapper.appendChild(warningText)

    addProjectButton = document.createElement('button')!
    addProjectButton.className = 'addProjectButton'
    addProjectButton.textContent = 'Add'
    addProjectButton.type = "button"
    form.appendChild(addProjectButton)

    cancelButton = document.createElement('button')!
    cancelButton.className = 'cancelButton'
    cancelButton.textContent = 'Cancel'
    cancelButton.type = "button"
    form.appendChild(cancelButton)

    const open = () => {
        if (getProjectNames === null) return
        currentProjects = getProjectNames()
        dialog.replaceChildren(form)
        dialog.showModal()
    }

    const close = () => {
        clearInputs()
        dialogManager.closeDialog()
    }

    cancelButton.addEventListener('click', close)

    const clearInputs = () => {
        currentProjects = []
        projectNameInput.value = ''
    }

    const doesProjectNameExist = (userInput: string) => {
        if (getProjectNames === null) return false
        return getProjectNames().some(projectName => projectName.toLowerCase() === userInput.toLowerCase())
    }

    const showError = () => {
        warningText.style.display = "block"
        warningText.textContent = "Project name already exist!"
        setTimeout(() => {
            warningText.style.display = "none"
        }, 2000)
    }

    const showNoTextError = () => {
        warningText.style.display = "block"
        warningText.textContent = "Type a name to add a new project!"
        setTimeout(() => {
            warningText.style.display = "none"
        }, 2000)
    }

    let getProjectNames: null | (() => string[]) = null

    const bindGetProjectNames = (callBack: () => string[]) => getProjectNames = callBack

    const bindAddProject = (handler: (project: string) => void) => {
        addProjectButton.addEventListener('click', () => {
            const projectName = getInput()
            if (!projectName) {
                showNoTextError()
                return
            }
            if (doesProjectNameExist(projectName)) {
                showError()
                return
            }
            handler(projectName)
            close()
        })
    }


    const getInput = (): string => projectNameInput.value


    return { open, bindGetProjectNames, bindAddProject }
}

export default createAddProjectModal