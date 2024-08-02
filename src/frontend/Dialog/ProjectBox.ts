export interface ProjectBox {
    bindOnModalOpened: (callBack: () => string[]) => void
    projectBox: HTMLDivElement
}

const createProjectBox = (): ProjectBox => {

    let projectBox: HTMLDivElement = document.createElement('div')!
    projectBox.className = 'projectBox'

    const projectLabel = document.createElement('label')!
    projectLabel.className = 'projectLabel'
    projectLabel.textContent = "Project"
    projectBox.appendChild(projectLabel)

    const projectSelect = document.createElement('select')!
    projectSelect.id = 'projectSelect'
    projectLabel.appendChild(projectSelect)

    let onModalOpened: null | ((callBack: () => string[]) => void) = null
    const bindOnModalOpened = (callBack: () => string[]) => {
        onModalOpened = () => {
            const projectNames = callBack()
            projectNames.forEach(projectName => {
                const option = document.createElement('option')!
                option.value = projectName
                projectSelect.appendChild(option)
            })
        }
    }


    return { bindOnModalOpened, projectBox }
}

export default createProjectBox