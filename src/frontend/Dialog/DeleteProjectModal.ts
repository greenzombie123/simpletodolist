import dialogManager from "./Dialog"

export interface DeleteProjectModalView {
    open: () => void
    bindGetProjectNames: (handler: () => string[]) => void
    bindDeleteProject: (handler: (project: string) => void) => void
}

const createDeleteProjectModal = (): DeleteProjectModalView => {

    let currentProjects: string[] = []

    const dialog = dialogManager.getDialog()
    const form = document.createElement('form')!
    let deleteProjectButton: HTMLButtonElement
    let cancelButton: HTMLButtonElement

    form.className = 'projectModal modal'

    const titleLabel = document.createElement('label')!
    titleLabel.className = 'projectNameLabel'
    titleLabel.textContent = "Choose a project to delete"
    titleLabel.htmlFor = "projectSelect"
    form.appendChild(titleLabel)

    const projectSelect = document.createElement('select')!
    projectSelect.id = 'projectSelect'
    form.appendChild(projectSelect)

    deleteProjectButton = document.createElement('button')!
    deleteProjectButton.className = 'deleteProjectButton'
    deleteProjectButton.textContent = 'Delete'
    deleteProjectButton.type = "button"
    form.appendChild(deleteProjectButton)

    cancelButton = document.createElement('button')!
    cancelButton.className = 'cancelButton'
    cancelButton.textContent = 'Cancel'
    cancelButton.type = "button"
    form.appendChild(cancelButton)

    const open = () => {
        if (getProjectNames === null) return
        currentProjects = getProjectNames()
        while (projectSelect.childElementCount) { projectSelect.removeChild(projectSelect.firstChild!) }
        currentProjects.forEach(project => {
            if (project !== "Inbox" && project !== "Today") {
                const option = document.createElement('option')!
                option.className = 'projectSelectOption'
                option.textContent = project
                projectSelect.appendChild(option)
            }
        })
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
        while (projectSelect.firstChild) { projectSelect.removeChild(projectSelect.firstChild) }
    }

    let getProjectNames: null | (() => string[]) = null

    const bindGetProjectNames = (callBack: () => string[]) => getProjectNames = callBack

    const bindDeleteProject = (handler: (project: string) => void) => {
        deleteProjectButton.addEventListener('click', () => {
            const projectName = getInput()
            handler(projectName)
            close()
        })
    }


    const getInput = (): string => projectSelect.value


    return { open, bindGetProjectNames, bindDeleteProject }
}

export default createDeleteProjectModal