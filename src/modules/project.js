import { createToDo } from "./toDo";

const createProject = (title) => {

  //Store To Dos, Add/Delete To Dos, 
  const project = {};

  const addToDo = (title, description, dueDate, priority) => {
    if(!hasToDo(title)){
      const toDo = createToDo(title, description, dueDate, priority);
      project[title] = toDo;
      return true;
    }
    return false;
  }

  const deleteToDo = (title) => {
    if(hasToDo(title)){
      delete project[title];
      return true;
    }
    return false;
  }

  const getToDo = (title) => {
    return project[title];
  }

  const hasToDo = (title) => Object.hasOwn(project, title);

  return {title, addToDo, deleteToDo, hasToDo};

}

export {createProject}