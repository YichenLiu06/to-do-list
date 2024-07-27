import deleteIcon from '../images/delete_icon.svg'

const createProjectElement = (project) => {
  const projectElement = document.createElement('li');
  projectElement.classList.add('project-wrapper');

  const titleDiv = document.createElement('div');
  titleDiv.textContent = project.title

  const deleteButton = document.createElement('input');
  deleteButton.type = 'image';
  deleteButton.src = deleteIcon;
  deleteButton.classList.add('delete-button');
  deleteButton.width = '30';
  deleteButton.height = '30';

  projectElement.append(titleDiv);
  projectElement.append(deleteButton);

  return projectElement;
}

export {createProjectElement}