import { ToDo, ToDoApp } from ".."
import './App.css';
import './Dialog/Dialog.css';
import createAddTaskModal, { AddTaskModalView } from "./Dialog/AddTaskModal";
import createHeader, { HeaderView } from "./Header/Header";
import createProjectListView, { ProjectListView } from "./projectListView";
import createTaskListView, { TaskListView } from "./TaskListView";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    const model = toDoApp
    const projectListView: ProjectListView = createProjectListView()
    const taskListView: TaskListView = createTaskListView()
    const headerView: HeaderView = createHeader()
    const addTaskModalView: AddTaskModalView = createAddTaskModal()

    const onProjectListChanged = (projectList: string[]) => projectListView.render(projectList)
    const onTaskListChanged = (taskList: ToDo[], project: string) => taskListView.render(taskList, project)
    const handleOpenAddTaskModal = () => addTaskModalView.open()
    const handleGetProjectNamesOnModalOpen = ()=> model.getProjectNames()


    const initialize = () => {

        model.bindOnProjectListChanged(onProjectListChanged)
        model.bindOnTaskListChanged(onTaskListChanged)
        headerView.bindHeaderButtonHandlers({ handleOpenAddTaskModal, handleDeleteProjectModal: () => { }, handleAddProjectModal: () => { } })
        addTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)

        model.initialize()

        addTaskModalView.open()
    }

    return { initialize }
}
