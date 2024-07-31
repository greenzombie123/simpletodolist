import './projectListView.css';

export interface ProjectListView {
    render: (projects: string[]) => void
}

const createProjectListView = (): ProjectListView => {
    const projectList = document.querySelector("aside ul")!

    const projectListNames: HTMLLIElement[] = []

    const render = (projects: string[]) => {
        projectList.textContent = ''
        projects.forEach(project => {
            const li = document.createElement('li')!
            projectListNames.push(li)
            li.textContent = project
            // li.addEventListener('click', () => callBack(project))
            projectList.appendChild(li)
        })
    }

    return { render }
}

export default createProjectListView