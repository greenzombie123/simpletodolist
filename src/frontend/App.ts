import { ToDo, ToDoApp } from ".."
import './App.css';
import { EventEmitter } from "./eventemitter";
import SideMenu, { ISideMenu } from "./SideMenu";
import TaskListView from "./TaskListView";
import Header from "./Header/Header";
import Dialog, { IDialog } from "./Dialog/Dialog";
import AddModal from "./Dialog/AddModal";
import AddTaskModal from "./Dialog/AddModal";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    let projects: string[]
    let todos: ToDo[]


    const initialize = () => {
        let sideMenu: ISideMenu
        let addTaskModal = AddTaskModal()
        let dialog: IDialog = Dialog(addTaskModal)

        EventEmitter.on("appInitialized", ({ projects, currentProject, tasks }: { projects: string[], currentProject: string, tasks: ToDo[] }) => {
            sideMenu = SideMenu(projects, () => { console.log(12) })
            TaskListView(tasks, currentProject, () => console.log(123))
        })

        toDoApp.initialize()

        Header({
            addTaskButtonHandler: () => dialog.openAddModal(),
            addProjectButtonHandler: () => console.log(1),
            deleteProjectButtonHandler: () => console.log(1)
        })

        dialog.openAddModal()
    }

    return { initialize }
}
