// formDropdown.js
const addForm = document.getElementById("add-form");
const closeButton = document.getElementById("close-button");
const saveButton = document.getElementById("save");
const titleInput = document.getElementById("title");
const hiddenInputs = document.querySelector(".hidden");


function loadDropdownInput () {
    titleInput.addEventListener("focus", () => {
        hiddenInputs.classList.add("input-open");
    })

    closeButton.addEventListener("click", (event) => {
        event.preventDefault();
        addForm.reset(); 
        hiddenInputs.classList.remove("input-open");
    })
    
    saveButton.addEventListener("click", () => {
        hiddenInputs.classList.remove("input-open");
    })
}

export { loadDropdownInput }