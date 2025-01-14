// formDropdown.js
import { ToDo } from "./addTodo";
import { makeTodoElement, display } from "./displayController";
import { getCurrentProject } from "./projectHandler";

const addForm = document.getElementById("add-form");
const closeButton = document.getElementById("close-button");
const saveButton = document.getElementById("save");
const titleInput = document.getElementById("title");
const hiddenInputs = document.querySelector(".hidden");

const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline")


function loadDropdownInput () {
    titleInput.addEventListener("focus", () => {
        hiddenInputs.classList.add("input-open");
    })

    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        addForm.reset(); 
        hiddenInputs.classList.remove("input-open");
    })
    
    saveButton.addEventListener("click", (event) => {
        event.preventDefault();
        if(titleInput.value.length !== 0){
            let todo = new ToDo(titleInput.value, descriptionInput.value, deadlineInput.value);
            let todoElement = makeTodoElement(todo);

            getCurrentProject().addTask(todo, todoElement);

            display(todoElement, container);

            addForm.reset();
        }
    })
}

export { loadDropdownInput }