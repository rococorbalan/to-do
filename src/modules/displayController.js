import { getCurrentProject, projects, setCurrentProject, updateLocalStorage } from "./projectHandler";
import deleteIcon from "../images/delete.svg";
import deleteForever from "../images/delete-forever.svg";
import cancel from "../images/cancel.svg";
import { formatDistanceToNow } from "date-fns";

// displayController.js
const container = document.getElementById("container")
const menu = document.querySelector(".menu")
const select = document.querySelector(".select");
const caret = document.querySelector(".caret");
const selected = document.querySelector(".selected")
const options = menu.children;


function makeTodoElement (object) {
    const deleteImage = document.createElement("img");
    deleteImage.src = deleteIcon;
    
    const deleteForeverIcon = document.createElement("img");
    deleteForeverIcon.src = deleteForever;
    
    const cancelIcon = document.createElement("img");
    cancelIcon.src = cancel;

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
    todoDeadline.textContent = formatDistanceToNow(object.deadline) + " left";

    const todoDone = document.createElement("input");
    todoDone.type = "checkbox";
    todoDone.addEventListener("change", (event) => {
        event.target.parentElement.classList.toggle("done");
        object.done = todoDone.checked;
        updateLocalStorage();
    })
    todoDone.classList.add("todo-done");

    const hiddenButtons = document.createElement("div");
    hiddenButtons.classList.add("hidden-buttons");
    hiddenButtons.classList.add("hidden");

    const confirmButton = document.createElement("button");
    confirmButton.classList.add("confirm-button");
    confirmButton.appendChild(deleteForeverIcon);
    confirmButton.addEventListener("click", () => {
        const taskElement = todoElement;
        const taskIndex = getCurrentProject().tasksElements.indexOf(taskElement);

        getCurrentProject().tasksElements.splice(taskIndex, 1);
        getCurrentProject().tasks.splice(getCurrentProject().tasks.indexOf(object), 1);

        taskElement.remove();
        updateLocalStorage();
    })

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.appendChild(cancelIcon);
    cancelButton.addEventListener("click", () => {
        hiddenButtons.classList.toggle("hidden")
        deleteButton.classList.toggle("hidden")
    })

    hiddenButtons.appendChild(confirmButton);
    hiddenButtons.appendChild(cancelButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("remove-task");
    deleteButton.appendChild(deleteImage);
    deleteButton.addEventListener("click", () => {
        hiddenButtons.classList.toggle("hidden")
        deleteButton.classList.toggle("hidden")
    })

    todoElement.appendChild(todoTitle);
    todoElement.appendChild(todoDescription);
    todoElement.appendChild(todoDeadline);
    todoElement.appendChild(todoDone);
    todoElement.appendChild(deleteButton);
    todoElement.appendChild(hiddenButtons);

    return(todoElement);
}


function display(element, container) {
    container.prepend(element);
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
    container.innerHTML = "";
    newProject.addEventListener("click", () => {
        selected.textContent = project.name;

        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");

        setCurrentProject(project);
        displayProject(project.tasksElements);

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