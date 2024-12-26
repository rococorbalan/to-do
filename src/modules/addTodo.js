// addTodo.js
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

    display(){
        console.log(this)
    }
    
}
export { ToDo };