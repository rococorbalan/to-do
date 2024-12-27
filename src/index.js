// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement } from "./modules/displayController";
import { doneButtonController } from "./modules/doneButtonController";

const form = document.getElementById("add-form");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")
const addButton = document.getElementById("save");

const container = document.getElementById("container")

let currentProject = [];
let currentProjectElements = [];

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
    let todoElement = makeTodoElement(todo);

    todo.addToProject(currentProject);
    currentProjectElements.push(todoElement);

    display(todoElement, container);
    doneButtonController(currentProject);

    form.reset();
})

