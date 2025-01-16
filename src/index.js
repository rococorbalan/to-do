// index.js
import "./style.css";
import { ToDo } from "./modules/addTodo";
import { display, makeTodoElement, displayProject, addProjectValue } from "./modules/displayController";
import { Project, projects, getCurrentProject, setCurrentProject } from "./modules/projectHandler";
import { loadDropdownInput } from "./modules/formDropdown";


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



