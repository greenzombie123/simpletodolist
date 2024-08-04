import './projectListView.css';

export interface ProjectListView {
    render: (projects: string[]) => void
    bindChangeCurrentTasks: (handler: (projectName: string) => void) => void
}

const createProjectListView = (): ProjectListView => {
    const projectList = document.querySelector("aside ul")!

    const projectListNames: HTMLLIElement[] = []

    const render = (projects: string[]) => {
        while (projectList.firstChild) { projectList.removeChild(projectList.firstChild) }
        projects.forEach(project => {
            const li = document.createElement('li')!
            projectListNames.push(li)
            li.textContent = project
            li.addEventListener("click", () => {
                if (changeCurrentTasks) changeCurrentTasks(project)
            })
            projectList.appendChild(li)
        })
    }

    const bindChangeCurrentTasks = (handler: (projectName: string) => void) => { changeCurrentTasks = handler }

    let changeCurrentTasks: ((projectName: string) => void) | null = null

    return { render, bindChangeCurrentTasks }
}

export default createProjectListView