interface DialogManager {
    getDialog: () => HTMLDialogElement
    closeDialog: () => void
}

const dialog = document.querySelector("dialog")!

const closeDialog = () => {
    dialog.close()
}

const getDialog = () => dialog

dialog.addEventListener('click', (e: Event) => {
    if (e.target === dialog) closeDialog()
})

const dialogManager: DialogManager = {
    closeDialog, getDialog
}

export default dialogManager

