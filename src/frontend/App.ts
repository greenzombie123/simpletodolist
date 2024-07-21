import { ToDo, ToDoApp } from ".."
import './App.css';
import { EventEmitter } from "./eventemitter";
import SideMenu, { ISideMenu } from "./SideMenu";
import AddButton from "./AddButton";
import AddProjectButton from "./AddProjectButton";
import TaskListView from "./TaskListView";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    let projects: string[]
    let todos: ToDo[]
    let sideMenu: ISideMenu
    let addButton = AddButton
    let taskListView

    const initialize = () => {
        EventEmitter.on("appInitialized", ({ projects, currentProject, tasks }: { projects: string[], currentProject: string, tasks: ToDo[] }) => {
            sideMenu = SideMenu(projects, () => { console.log(12) })
            TaskListView(tasks, currentProject, () => { })
        })

        toDoApp.initialize()
    }

    return { initialize }
}
