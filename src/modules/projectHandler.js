import { createProject } from "./project";

const createProjectHandler = () => {
  const projects = [];

  const addProject = (title) => {
    if(!hasProject(title)){
      const project = createProject(title)
      projects.push(project);
      return true; 
    }
    return false;
  }

  const deleteProject = (title) => {
    if(hasProject(title)){
      projects.splice(projects.findIndex((project) => project.title == title),1);
      return true;
    }
    return false;
  }

  const getProjects = () => {
    return projects;
  }

  const hasProject = (title) => projects.some((project) => project.title == title);

  const displayProjects = () => {
    console.log(projects);
  }

  return {addProject, getProjects, deleteProject, hasProject, displayProjects}
}

export {createProjectHandler}

