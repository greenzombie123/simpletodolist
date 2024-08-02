import './Header.css'

export interface HeaderButtonHandlers {
    handleOpenAddTaskModal: () => void
    handleAddProjectModal: () => void
    handleDeleteProjectModal: () => void
}

export interface HeaderView {
    bindHeaderButtonHandlers: (handlers: HeaderButtonHandlers) => void
}

const createHeader = (): HeaderView => {
    const header = document.querySelector('header')!
    const buttons = Array.from(header.querySelectorAll('button'))

    const bindHeaderButtonHandlers = (handlers: HeaderButtonHandlers) => {
        const { handleAddProjectModal, handleDeleteProjectModal, handleOpenAddTaskModal } = handlers
        buttons[0].addEventListener('click', handleOpenAddTaskModal)
        buttons[1].addEventListener('click', handleAddProjectModal)
        buttons[2].addEventListener('click', handleDeleteProjectModal)
    }

    return { bindHeaderButtonHandlers }
}

export default createHeader