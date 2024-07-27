import { createDOMHandler } from "./modules/DOMHandler.js";
import { createProjectHandler } from "./modules/projectHandler.js";
import './styles.css';

const projectHandler = createProjectHandler();

projectHandler.addProject("Essay");
projectHandler.addProject('asdfas');

let project = projectHandler.getProjects().find((element) => element.title == "Essay");


project.addToDo('Hello', 'what the fuck', new Date(12312312), 'medium');
project.addToDo('poop', 'is this', new Date(1231231), 'low');

console.log(project.getToDos());
projectHandler.displayProjects();

const DOMHandler = createDOMHandler(projectHandler);
DOMHandler.displayProject(DOMHandler.currentProject);
DOMHandler.displayProjects();
