// projectHandler.js
import { addProjectValue, displayProject } from "./displayController";

let projectList = document.querySelectorAll(".project")
const newProjectBtn = document.getElementById("new")
const currentProjectElement = document.getElementById("current-project")

const dialog = document.getElementById("add-project-dialog")
const closeDialog = document.querySelector(".dialog-close");
const addForm = document.getElementById("add-project")
const addProjectTitle = document.getElementById("new-project-title")
const addProject = document.getElementById("add-project-btn")

const dropdown = document.getElementById("dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = menu.children;
const selected = dropdown.querySelector(".selected");

let newProject;
let projects = []

let currentProject;
const getCurrentProject = () => currentProject;
const setCurrentProject = (project) => {
    currentProject = project;
    const projectOption = Array.from(options).find((element) => element.textContent.trim() === project.name);

    selected.textContent = projectOption.textContent;

    select.classList.remove("select-clicked");
    caret.classList.remove("caret-rotate");
    menu.classList.remove("menu-open");

    for(const opt of options) {
        opt.classList.remove("active");
    }

    projectOption.classList.add("active");
}

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

// Dropdown Menu
select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
})


for(const option of options){
    option.addEventListener("click", () => {
        selected.textContent = option.textContent;

        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        for(const opt of options) {
            opt.classList.remove("active");
        }

        option.classList.add("active");
    })
}


newProjectBtn.addEventListener("click", () => {
    dialog.showModal();
})


dialog.addEventListener("click", (event) => {
    if(event.target === dialog) {
        dialog.close();
    }
})

closeDialog.addEventListener("click", () => {
    dialog.close();
})


addProject.addEventListener("click", (event) => {
    event.preventDefault();
    if(addProjectTitle.value.length !== 0){
        newProject = new Project(addProjectTitle.value);
        addForm.reset();
        dialog.close();

        projects.unshift(newProject);
        addProjectValue(newProject);

        setCurrentProject(newProject)
    }   
})

const getNewProject = () => newProject;

export { Project, getNewProject, projects, setCurrentProject, getCurrentProject}