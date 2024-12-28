// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement, displayProject, addProjectValue } from "./modules/displayController";
import { doneButtonController } from "./modules/doneButtonController";
import { Project, projects } from "./modules/projectHandler";

const form = document.getElementById("add-form");
const titleInput = document.getElementById("title")
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")
const addButton = document.getElementById("save");

const projectSelector = document.getElementById("projects")

const container = document.getElementById("container")

let defaultProject = new Project("default");
projects.unshift(defaultProject);

let currentProject = defaultProject;

addProjectValue(defaultProject, projectSelector);

projectSelector.value = projectSelector.options[0].value;

addButton.addEventListener("click", (event) => {
    event.preventDefault();

    let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
    let todoElement = makeTodoElement(todo);

    currentProject.addTask(todo, todoElement);
    console.log(defaultProject, projects)

    display(todoElement, container);
    doneButtonController(currentProject);

    form.reset();
})
