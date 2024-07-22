import { createProject } from "./project";

const createProjectHandler = () => {
  const projects = {};

  const addProject = (title) => {
    if(!hasProject(title)){
      const project = createProject(title)
      projects[title] = project;
      return true; 
    }
    return false;
  }

  const deleteProject = (title) => {
    if(hasProject(title)){
      delete projects[title];
      return true;
    }
    return false;
  }

  const getProject = (title) => {
    return projects[title];
  }

  const hasProject = (title) => Object.hasOwn(projects, title);

  const displayProjects = () => {
    console.log(projects);
  }

  return {addProject, getProject, deleteProject, hasProject, displayProjects}
}

export {createProjectHandler}

