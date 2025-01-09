import { projects, setCurrentProject } from "./projectHandler";

// displayController.js
const container = document.getElementById("container")
const menu = document.querySelector(".menu")
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const selected = document.querySelector(".selected")
const options = menu.children;


function makeTodoElement (object) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo-element");

    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = object.title;

    const todoDescription = document.createElement("p");
    todoDescription.classList.add("todo-description");
    todoDescription.textContent = object.description;

    const todoDeadline = document.createElement("span");
    todoDeadline.classList.add("todo-deadline");
    todoDeadline.textContent = object.deadline;

    const todoDone = document.createElement("input");
    todoDone.type = "checkbox";
    todoDone.classList.add("todo-done");

    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDescription);
    todoElement.appendChild(todoDeadline);
    todoElement.appendChild(todoDone);

    return(todoElement);
}


function display(element, container) {
    container.appendChild(element);
}

function displayProject(elements) {
    container.innerHTML = "";
    elements.forEach(element => {
        container.appendChild(element); 
    });
}

function addProjectValue(project) {
    let newProject = document.createElement("li");
    newProject.classList.add("project")
    newProject.addEventListener("click", () => {
        selected.textContent = project.name;

        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        for(const opt of options) {
            opt.classList.remove("active");
        }

        newProject.classList.add("active");
    })
    menu.appendChild(newProject);
    newProject.textContent = project.name; 
    setCurrentProject(project);
}

export { display, makeTodoElement, displayProject, addProjectValue };