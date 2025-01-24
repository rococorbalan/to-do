// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement, displayProject, addProjectValue } from "./modules/displayController";
import { Project, projects, getCurrentProject, setCurrentProject, updateLocalStorage } from "./modules/projectHandler";
import { loadDropdownInput } from "./modules/formDropdown";


loadDropdownInput();


// Set minimum date input
const today = new Date().toISOString().split('T')[0];
document.getElementById('deadline').min = today;


// Defaults
if (!localStorage.getItem("projects") || JSON.parse(localStorage.getItem("projects")).length === 0) {
    let workProject = new Project("Work");
    projects.unshift(workProject);
    addProjectValue(workProject);
    
    let schoolProject = new Project("School");
    projects.unshift(schoolProject);
    addProjectValue(schoolProject);
    
    let gamesProject = new Project("Games");
    projects.unshift(gamesProject);
    addProjectValue(gamesProject);
    
    updateLocalStorage();
    
} else {
    let storedProjects = JSON.parse(localStorage.getItem("projects"));
    storedProjects.forEach(project => {
        let projectCopy = new Project(project.name);
        projectCopy.tasks = project.tasks;
        projectCopy.tasks.forEach(task => {
            let taskElement = makeTodoElement(task);
            if (task.done === true){
                taskElement.classList.add("done")
                taskElement.children[3].checked = true;
            }
            projectCopy.tasksElements.push(taskElement);
        })
        projects.push(projectCopy);
    });
    projects.forEach(project => {
        addProjectValue(project);
    })

    setCurrentProject(projects[0]);
    displayProject(getCurrentProject().tasksElements)
}



