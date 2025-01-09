// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement, displayProject, addProjectValue } from "./modules/displayController";
import { doneButtonController } from "./modules/doneButtonController";
import { Project, projects, getCurrentProject, setCurrentProject } from "./modules/projectHandler";

const form = document.getElementById("add-form");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")
const addButton = document.getElementById("save");

let defaultProject = new Project("default")

projects.unshift(defaultProject);
addProjectValue(defaultProject);

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
    let todoElement = makeTodoElement(todo);

    getCurrentProject().addTask(todo, todoElement);

    display(todoElement, container);
    doneButtonController(getCurrentProject());

    form.reset();
})

