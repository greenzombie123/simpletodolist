import AddTaskModal from "./AddModal";
import "./Dialog.css";

export interface IDialog {
    openAddModal: () => void
    closeAddModal: () => void
}

const Dialog = (addTaskModal: HTMLFormElement): IDialog => {
    const dialog = document.querySelector('Dialog') as HTMLDialogElement

    dialog.addEventListener("click", () => { dialog.close() })

    const openAddModal = () => {
        dialog.replaceChildren(addTaskModal)
        dialog.showModal()
    }

    const closeAddModal = () => {
        dialog.close()
    }

    return { openAddModal, closeAddModal }
}

export default Dialog