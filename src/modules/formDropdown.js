// formDropdown.js
import { ToDo } from "./addTodo";
import { makeTodoElement, display, displayProject } from "./displayController";
import { getCurrentProject, setCurrentProject, projects, updateLocalStorage } from "./projectHandler";

const addForm = document.getElementById("add-form");
const closeButton = document.getElementById("close-button");
const saveButton = document.getElementById("save");
const titleInput = document.getElementById("title");
const hiddenInputs = document.getElementById("hidden-inputs");

const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")

const deleteProject = document.getElementById("delete-project");
const confirmButtonsContainer = document.getElementById("confirm-buttons")
const confirmDelete = document.getElementById("confirm");
const cancelDelete = document.getElementById("cancel");
const menu = dropdown.querySelector(".menu");
const options = menu.children;

function loadDropdownInput () {
    titleInput.addEventListener("focus", () => {
        hiddenInputs.classList.remove("hidden");
    })

    titleInput.addEventListener("input", () => {
        titleInput.classList.remove("wrong")
    })

    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        addForm.reset(); 
        hiddenInputs.classList.toggle("hidden");
    })
    
    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        if(titleInput.value.length !== 0){
            let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
            let todoElement = makeTodoElement(todo);

            getCurrentProject().addTask(todo, todoElement);

            display(todoElement, container);

            addForm.reset();
        }else {
            titleInput.classList.add("wrong");
        }
    })

    deleteProject.addEventListener("click", (event) => {
        event.preventDefault();
        deleteProject.classList.toggle("hidden");
        confirmButtonsContainer.classList.toggle("hidden");
    })

    cancelDelete.addEventListener("click", (event) => {
        event.preventDefault();
        deleteProject.classList.toggle("hidden");
        confirmButtonsContainer.classList.toggle("hidden");
    })

    confirmDelete.addEventListener("click", (event) => {
        event.preventDefault();
        const projectOption = Array.from(options).find((element) => element.textContent.trim() === getCurrentProject().name);
        const projectIndex = projects.indexOf(getCurrentProject());
        projects.splice(projectIndex, 1);

        projectOption.remove();
        setCurrentProject(projects[0]);
        displayProject(getCurrentProject().tasksElements);
        updateLocalStorage();

        deleteProject.classList.toggle("hidden");
        confirmButtonsContainer.classList.toggle("hidden");
    })
}

export { loadDropdownInput }