// displayController.js
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

function displayProject(elements, container) {
    elements.forEach(element => {
        container.appendChild(element);
    });
}

export { display, makeTodoElement, displayProject };