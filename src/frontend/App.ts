import { ToDo, ToDoApp } from ".."
import './App.css';
import { EventEmitter } from "./eventemitter";
import SideMenu, { ISideMenu } from "./SideMenu";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    let projects: string[]
    let todos: ToDo[]
    let sideMenu:ISideMenu

    const initialize = () => {
        EventEmitter.on("appInitialized", ({ projects }: { projects: string[] }) => {
            sideMenu = SideMenu(projects, () => { console.log(12) })
        })

        toDoApp.initialize()
    }

    return { initialize }
}
