// doneButtonController.js
const doneButtons = document.getElementsByClassName("todo-done")

function doneButtonController(){
    for(const button of doneButtons){
        button.parentElement.classList.toggle("done")
    }
}

export { doneButtonController }