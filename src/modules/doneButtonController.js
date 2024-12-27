// doneButtonController.js
function doneButtonController(project){
    let doneButtons = document.querySelectorAll(".todo-done");
    

    doneButtons.forEach(button => {
        let todoIndex = Array.prototype.indexOf.call(doneButtons, button);
        let todo = project[todoIndex];
        
        if (button.handler) {
            button.removeEventListener("click", button.handler);
        }

        button.handler = (event) => doneButtonEvent(event, todo);
        button.addEventListener("click", button.handler);
    })
}

function doneButtonEvent(event, todo) {
    todo.done = event.currentTarget.checked;

    if(event.currentTarget.checked){
        (event.currentTarget.parentNode).classList.remove("not-done");
        (event.currentTarget.parentNode).classList.add("done");
    }else {
        (event.currentTarget.parentNode).classList.remove("done");
        (event.currentTarget.parentNode).classList.add("not-done");
    }
}

export { doneButtonController }