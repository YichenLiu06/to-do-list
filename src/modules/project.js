import { createToDo } from "./toDo";

const createProject = (title) => {

  //Store To Dos, Add/Delete To Dos, 
  const project = [];

  const addToDo = (title, description, dueDate, priority) => {
    if(!hasToDo(title)){
      let toDo = createToDo(title, description, dueDate, priority);
      project.push(toDo);
      return true;
    }
    return false;
  }

  const deleteToDo = (title) => {
    if(hasToDo(title)){
      project.splice(project.findIndex((toDo) => toDo.title == title));
      return true;
    }
    return false;
  }

  const getToDos = () => {
    return project;
  }

  const hasToDo = (title) => project.some((toDo) => toDo.title == title);

  return {title, addToDo, deleteToDo, hasToDo, getToDos};

}

export {createProject}