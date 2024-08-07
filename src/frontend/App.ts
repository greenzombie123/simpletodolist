import { NewToDo, ToDo, ToDoApp } from ".."
import './App.css';
import './Dialog/Dialog.css';
import createAddTaskModal, { AddTaskModalView } from "./Dialog/AddTaskModal";
import createHeader, { HeaderView } from "./Header/Header";
import createProjectListView, { ProjectListView } from "./projectListView";
import createTaskListView, { TaskListView } from "./TaskListView";
import createEditTaskModal, { EditTaskModalView } from "./Dialog/EditTaskModal";
import createAddProjectModal, { AddProjectModalView } from "./Dialog/AddProjectModal";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    const model = toDoApp
    const projectListView: ProjectListView = createProjectListView()
    const taskListView: TaskListView = createTaskListView()
    const headerView: HeaderView = createHeader()
    const addTaskModalView: AddTaskModalView = createAddTaskModal()
    const addProjectModalView: AddProjectModalView = createAddProjectModal()
    const editTaskModalView: EditTaskModalView = createEditTaskModal()


    const onProjectListChanged = (projectList: string[]) => projectListView.render(projectList)
    const onTaskListChanged = (taskList: ToDo[], project: string) => taskListView.render(taskList, project)
    const handleOpenAddTaskModal = () => addTaskModalView.open()
    const handleOpenAddProjectModal = () => addProjectModalView.open()
    const handleGetProjectNamesOnModalOpen = () => model.getProjectNames()
    const handleAddTask = (newToDo: NewToDo) => model.addTask(newToDo)
    const handleChangeCurrentTasks = (projectName: string) => model.setCurrentTasks(projectName)
    const handleEditTask = (id: string, todo: NewToDo) => { model.editTask(id, todo) }
    const handleOpenEditTaskModal = (todo: ToDo) => {
        editTaskModalView.open()
        editTaskModalView.bindEditTask(handleEditTask, todo.id)
        editTaskModalView.setInput(todo)
    }
    const handleDeleteTask = (id: string) => model.deleteTask(id)
    const handleAddProject = (projectName: string) => model.addProject(projectName)



    const initialize = () => {

        model.bindOnProjectListChanged(onProjectListChanged)
        model.bindOnTaskListChanged(onTaskListChanged)
        headerView.bindHeaderButtonHandlers({ handleOpenAddTaskModal, handleOpenDeleteProjectModal: () => { }, handleOpenAddProjectModal })
        addTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)
        editTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)
        addTaskModalView.bindAddTask(handleAddTask)
        addProjectModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)
        addProjectModalView.bindAddProject(handleAddProject)
        projectListView.bindChangeCurrentTasks(handleChangeCurrentTasks)
        taskListView.bindOpenEditTask(handleOpenEditTaskModal)
        taskListView.bindDeleteTask(handleDeleteTask)

        model.initialize()

        // addProjectModalView.open()
    }

    return { initialize }
}
