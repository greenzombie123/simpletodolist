import './SideMenu.css';

export interface ISideMenu {
    rerender: (projects: string[]) => void
}

const SideMenu = (projects: string[], callBack: (project: string) => void): ISideMenu => {
    const sideMenu = document.querySelector("aside ul")!

    const projectList: HTMLLIElement[] = []

    projects.forEach(project => {
        const li = document.createElement('li')!
        projectList.push(li)
        li.textContent = project
        li.addEventListener('click', () => callBack(project))
        sideMenu.appendChild(li)
    })

    const rerender = (projects: string[]) => {
        sideMenu.textContent = ''
        projects.forEach(project => {
            const li = document.createElement('li')!
            projectList.push(li)
            li.textContent = project
            li.addEventListener('click', () => callBack(project))
            sideMenu.appendChild(li)
        })
    }

    return { rerender }
}

export default SideMenu