import { createProjectHandler } from "./projectHandler";
import { createToDo } from "./toDo";
import { createToDoElement } from "./toDoElement";
import { createProjectElement } from "./projectElement";

const createDOMHandler = (projectHandler) => {

  let currentProject = "Essay";
  const addToDoButton = document.querySelector('[type="submit"]');
  addToDoButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = new Date(document.querySelector('#due-date').valueAsNumber);
    const priority = document.querySelector('#priority').value;
    let project = projectHandler.getProjects().find((element) => element.title == currentProject);
    project.addToDo(title, description, dueDate, priority);
    unloadProject();
    displayProject(currentProject);

  })

  const displayProject = (title) => {
    let project = projectHandler.getProjects().find((element) => element.title == title);
    let toDos = project.getToDos();
    toDos.forEach(toDo => {
      let toDoElement = createToDoElement(toDo)
      document.querySelector('.todo-container').append(toDoElement);
      const deleteButton = toDoElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', () => {
        project.deleteToDo(toDo.title);
        toDoElement.remove();
      })
    });
  }

  const displayProjects = () => {
    let projects = projectHandler.getProjects();
    projects.forEach(project => {
      let projectElement = createProjectElement(project);
      document.querySelector('.project-container').append(projectElement);
      const deleteButton = projectElement.querySelector('.delete-button');
      projectElement.addEventListener('click', () => {
        currentProject = project.title;
        unloadProject();
        displayProject(currentProject);
      });
     console.log(deleteButton)
      deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        projectHandler.deleteProject(project.title);
        projectElement.remove();
        if(currentProject = project.title){
          currentProject = projectHandler.getProjects()[0].title;
          unloadProject();
          displayProject(currentProject);
        }
      });
    })
  }

  const unloadProject = () => {
    document.querySelector('.todo-container').textContent = ''
  }

  return {displayProject, displayProjects, currentProject}

}

export {createDOMHandler}
