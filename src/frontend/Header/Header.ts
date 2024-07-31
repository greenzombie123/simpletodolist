import './Header.css'

interface HeaderButtonHandlers {
    addTaskButtonHandler: () => void
    addProjectButtonHandler: () => void
    deleteProjectButtonHandler: () => void
}

const Header = (headerButtonHandlers: HeaderButtonHandlers) => {
    const header = document.querySelector('header')!
    const buttons = Array.from(header.querySelectorAll('button'))
    const { addTaskButtonHandler, addProjectButtonHandler, deleteProjectButtonHandler } = headerButtonHandlers
    buttons[0].addEventListener('click', addTaskButtonHandler) 
    buttons[1].addEventListener('click', addProjectButtonHandler)  
    buttons[2].addEventListener('click', deleteProjectButtonHandler) 
}

export default Header