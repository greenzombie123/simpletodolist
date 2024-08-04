import { NewToDo, ToDo, ToDoApp } from ".."
import './App.css';
import './Dialog/Dialog.css';
import createAddTaskModal, { AddTaskModalView } from "./Dialog/AddTaskModal";
import createHeader, { HeaderView } from "./Header/Header";
import createProjectListView, { ProjectListView } from "./projectListView";
import createTaskListView, { TaskListView } from "./TaskListView";
import createEditTaskModal, { EditTaskModalView } from "./Dialog/EditTaskModal";



interface App {
    initialize: () => void
}

export default function App(toDoApp: ToDoApp): App {

    const model = toDoApp
    const projectListView: ProjectListView = createProjectListView()
    const taskListView: TaskListView = createTaskListView()
    const headerView: HeaderView = createHeader()
    const addTaskModalView: AddTaskModalView = createAddTaskModal()
    const editTaskModalView:EditTaskModalView = createEditTaskModal()

    const onProjectListChanged = (projectList: string[]) => projectListView.render(projectList)
    const onTaskListChanged = (taskList: ToDo[], project: string) => taskListView.render(taskList, project)
    const handleOpenAddTaskModal = () => addTaskModalView.open()
    const handleGetProjectNamesOnModalOpen = () => model.getProjectNames()
    const handleAddTask = (newToDo: NewToDo) => model.addTask(newToDo)
    const handleChangeCurrentTasks = (projectName: string) => model.setCurrentTasks(projectName)
    const handleEditTask = (id:string, todo:NewToDo)=> {model.editTask(id, todo)}
    const handleOpenEditTaskModal = (todo:ToDo)=>{
        editTaskModalView.open()
        editTaskModalView.bindEditTask(handleEditTask, todo.id)
        editTaskModalView.setInput(todo)
    }
    const handleDeleteTask = (id:string)=> model.deleteTask(id)
    


    const initialize = () => {

        model.bindOnProjectListChanged(onProjectListChanged)
        model.bindOnTaskListChanged(onTaskListChanged)
        headerView.bindHeaderButtonHandlers({ handleOpenAddTaskModal, handleDeleteProjectModal: () => { }, handleAddProjectModal: () => { } })
        addTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)
        editTaskModalView.bindGetProjectNames(handleGetProjectNamesOnModalOpen)
        addTaskModalView.bindAddTask(handleAddTask)
        projectListView.bindChangeCurrentTasks(handleChangeCurrentTasks)
        taskListView.bindOpenEditTask(handleOpenEditTaskModal)
        taskListView.bindDeleteTask(handleDeleteTask)

        model.initialize()

        // addTaskModalView.open()
    }

    return { initialize }
}
