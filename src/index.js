// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";

const form = document.getElementById("add-form");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")
const addButton = document.getElementById("save");

let currentProject = [];

addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
    todo.addToProject(currentProject);
    todo.display();
    form.reset();
})

