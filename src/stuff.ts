import { ToDo, ToDoApp } from ".";

interface Model {
    bindTaskListChanged: () => void
    onTaskListChanged: () => void
    bindPriorityListChanged: () => void
    onPriorityListChanged: () => void
}

interface Controller {
    toDoApp: ToDoApp
    taskListView: TaskListView
    projectListView: ProjectListView
    headerView: HeaderView
    addTaskModal: AddTaskModalView
    editTaskModal: EditTaskModalView
    onTaskListChanged: () => void
    onPriortyListChanged: () => void
    handleOpenAddTaskModal: () => void
    handleAddTask: () => void
    handleTaskClicked: (id: string) => void
    handleEditTask: (id: string) => void
    // handleOpenAddTaskModal:()=>void
    // onRenderTasks:(project:string, todoList:ToDo[])=>void
    // onRenderProjectList:(projectList:string[])=>void
    // handleOpenAddProjectModal:()=>void
    // handleOpenDeleteProjectModal:()=>void
    // handleAddProject:(project:string)=>void
    // handleDeleteProject:(project:string)=>void
    init: () => void
}

interface TaskListView {
    taskListView: HTMLDivElement
    render: (todoList: ToDo[], project: string) => void
    onTaskClicked: () => void
    bindOnTaskClicked: () => void
}


interface ProjectListView {
    projectListView: HTMLUListElement
    render: (projectList: string[]) => void
}

interface HeaderView {
    addTaskButton: HTMLButtonElement
    deleteProjectButton: HTMLButtonElement
    createProjectButton: HTMLButtonElement
    onAddTaskButtonClick: () => void //Passed as a parameter
    // openCreateTaskModalHandler: () => void //Passed as a parameter
    // openDeleteProjectModalHandler: () => void //Passed as a parameter
}

interface EditTaskModalView {
    dialog: HTMLDialogElement
    modal: HTMLFormElement
    editTaskButton: HTMLButtonElement
    cancelButton: HTMLButtonElement
    open: () => void
    getInput: () => ToDo
    bindEditTask: (id: string, handler: (id: string) => void) => void
    close: () => void
}

interface AddTaskModalView {
    dialog: HTMLDialogElement
    modal: HTMLFormElement
    addTaskButton: HTMLButtonElement
    cancelButton: HTMLButtonElement
    open: () => void
    getInput: () => void
    bindOnAddTaskButtonClick: () => void
    OnAddTaskButtonClick: () => void
    // close: () => void
    // openAddTaskModalHandler: () => void //Exposed
    // addTaskHandler: () => void //Passed as a parameter
    // cancelModalHandler:()=>void
}

interface CreateProjectModalView { }
interface DeleteProjectModalView { }


