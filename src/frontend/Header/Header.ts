import './Header.css'

export interface HeaderButtonHandlers {
    handleOpenAddTaskModal: () => void
    handleOpenAddProjectModal: () => void
    handleOpenDeleteProjectModal: () => void
}

export interface HeaderView {
    bindHeaderButtonHandlers: (handlers: HeaderButtonHandlers) => void
}

const createHeader = (): HeaderView => {
    const header = document.querySelector('header')!
    const buttons = Array.from(header.querySelectorAll('button'))

    const bindHeaderButtonHandlers = (handlers: HeaderButtonHandlers) => {
        const { handleOpenAddProjectModal, handleOpenDeleteProjectModal, handleOpenAddTaskModal } = handlers
        buttons[0].addEventListener('click', handleOpenAddTaskModal)
        buttons[1].addEventListener('click', handleOpenAddProjectModal)
        buttons[2].addEventListener('click', handleOpenDeleteProjectModal)
    }

    return { bindHeaderButtonHandlers }
}

export default createHeader