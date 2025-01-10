// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement, displayProject, addProjectValue } from "./modules/displayController";
import { Project, projects, getCurrentProject, setCurrentProject } from "./modules/projectHandler";
import { loadDropdownInput } from "./modules/formDropdown";

const form = document.getElementById("add-form");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")
const addButton = document.getElementById("save");


loadDropdownInput();

// Defaults
let workProject = new Project("Work");
projects.unshift(workProject);
addProjectValue(workProject);

let schoolProject = new Project("School");
projects.unshift(schoolProject);
addProjectValue(schoolProject);

let gamesProject = new Project("Games");
projects.unshift(gamesProject);
addProjectValue(gamesProject);


addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
    let todoElement = makeTodoElement(todo);

    getCurrentProject().addTask(todo, todoElement);

    display(todoElement, container);

    form.reset();
})
