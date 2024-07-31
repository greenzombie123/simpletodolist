import { ToDo, ToDoApp } from ".."
import './App.css';
import TaskListView from "./TaskListView";
import Header from "./Header/Header";
import Dialog, { IDialog } from "./Dialog/Dialog";
import AddModal from "./Dialog/AddModal";
import AddTaskModal from "./Dialog/AddModal";
import createProjectListView, { ProjectListView } from "./projectListView";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    const model = toDoApp
    const projectListView:ProjectListView = createProjectListView()


    const initialize = () => {
        toDoApp.initialize()
    }

    return { initialize }
}
