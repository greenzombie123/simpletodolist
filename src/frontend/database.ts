import { ToDo, Priority } from './types';
import { v4 as uuidv4 } from 'uuid'

const databaseManager = (() => {
    const taskKey = 'tasks'
    const projectKey = 'project'
    const initialTasks: ToDo[] = [
        { title: "Do the dishes now", dueDate: "2024-08-10", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false },
        { title: "Do the dishes", description: "Do it soon!", dueDate: new Date().toISOString().slice(0, 10), priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false },
        { title: "Do the dishes yesterday", dueDate: "2025-12-11", priority: Priority.None, project: "Inbox", id: uuidv4(), isCompleted: false },
        { title: "Do the dishes today!", dueDate: "2024-02-27", priority: Priority.High, project: "School", id: uuidv4(), isCompleted: false },
        { title: "Do the dishes today!", dueDate: "2024-05-02", priority: Priority.Low, project: "Ice", id: uuidv4(), isCompleted: false }
    ]
    const initialProjects = ['Inbox', 'Today', 'Ice', 'School', 'Job']

    const getTasks = (): ToDo[] => {
        let storedTasks = localStorage.getItem(taskKey);

        if (!storedTasks) {
            localStorage.setItem(taskKey, JSON.stringify(initialTasks));
            storedTasks = JSON.stringify(initialTasks);
        }

        return JSON.parse(storedTasks);
    };

    const getProjects = (): string[] => {
        let storedProjects = localStorage.getItem(projectKey);

        if (!storedProjects) {
            localStorage.setItem(projectKey, JSON.stringify(initialProjects));
            storedProjects = JSON.stringify(initialProjects);
        }

        return JSON.parse(storedProjects);
    };

    const setTasks = (tasks: ToDo[]) => {
        localStorage.setItem(taskKey, JSON.stringify(tasks))
    }

    const setProjects = (projects: string[]) => {
        localStorage.setItem(projectKey, JSON.stringify(projects))
    }

    return { getProjects, setProjects, setTasks, getTasks }
})()

export default databaseManager

