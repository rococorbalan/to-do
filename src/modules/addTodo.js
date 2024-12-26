// addTodo.js
import { display } from "./displayController";

class ToDo {
    constructor(title, description, deadline) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.done = false;
    }

    addToProject(project) {
        project.push(this);
    }
}



export { ToDo };