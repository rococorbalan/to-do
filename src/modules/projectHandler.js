// projectHandler.js
class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
        this.tasksElements = [];
    }

    addTask(task, tasksElement) {
        this.tasks.push(task);
        this.tasksElements.push(tasksElement);
    }
}

export { Project }