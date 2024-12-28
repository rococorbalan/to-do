// projectHandler.js
import { addProjectValue } from "./displayController";

const projectSelector = document.getElementById("projects")
const dialog = document.getElementById("add-project-dialog")
const closeDialog = document.querySelector(".dialog-close");
const addForm = document.getElementById("add-project")
const addProjectTitle = document.getElementById("new-project-title")
const addProject = document.getElementById("add-project-btn")

let newProject;
let projects = []

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

projectSelector.addEventListener("change", (event) => {
    if(event.currentTarget.value === "new"){
        dialog.showModal();
    }
})

addProject.addEventListener("click", (event) => {
    event.preventDefault();
    if(addProjectTitle.value.length !== 0){
        newProject = new Project(addProjectTitle.value);
        addForm.reset();
        dialog.close();

        projects.unshift(newProject);
        addProjectValue(newProject, projectSelector);
        projectSelector.value = projectSelector.options[0].value;
    }   
})

const getNewProject = () => newProject;

export { Project, getNewProject, projects}