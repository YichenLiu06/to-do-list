import { createProjectHandler } from "./modules/projectHandler.js";
import './styles.css';


const projectHandler = createProjectHandler();

projectHandler.addProject("Essay");

console.log(projectHandler.getProject('Essay'));

projectHandler.getProject('Essay').addToDo('Hello', '', '', '');

projectHandler.displayProjects();

