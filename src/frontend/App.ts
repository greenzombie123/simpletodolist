import { ToDo, ToDoApp } from ".."
import './App.css';
import createProjectListView, { ProjectListView } from "./projectListView";
import createTaskListView, { TaskListView } from "./TaskListView";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    const model = toDoApp
    const projectListView: ProjectListView = createProjectListView()
    const taskListView:TaskListView = createTaskListView()

    const onProjectListChanged = (projectList: string[]) => projectListView.render(projectList)
    const onTaskListChanged = (taskList: ToDo[], project:string) => taskListView.render(taskList, project)

    const initialize = () => {

        toDoApp.bindOnProjectListChanged(onProjectListChanged)
        toDoApp.bindOnTaskListChanged(onTaskListChanged)

        toDoApp.initialize()
    }

    return { initialize }
}
