export interface ProjectBox {
    setProjectNamesOnOpen: (projectNames: string[]) => void
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

    let setProjectNamesOnOpen = (projectNames: string[]) => {
        while (projectSelect.childElementCount) { projectSelect.removeChild(projectBox.firstChild!) }
        projectNames.forEach(projectName => {
            const option = document.createElement('option')!
            option.value = projectName
            option.textContent = projectName
            projectSelect.appendChild(option)
        })
    }

    return { projectBox, setProjectNamesOnOpen }
}



export default createProjectBox