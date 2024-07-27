import deleteIcon from '../images/delete_icon.svg'
import dropDownIcon from '../images/drop_down_icon.svg'

const createToDoElement = (toDo) => {
  const toDoElement = document.createElement('li');
  toDoElement.style.borderLeftColor = `var(--${toDo.priority})`;
  toDoElement.classList.add('todo-wrapper');

  const dropDownButton = document.createElement('input');
  dropDownButton.type = 'image';
  dropDownButton.src = dropDownIcon;
  dropDownButton.classList.add('drop-down-button');
  dropDownButton.height = '40';
  dropDownButton.width = '40';

  const titleDiv = document.createElement('div');
  titleDiv.textContent = toDo.title;

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = `${toDo.dueDate.getMonth() > 9 ? '' : '0' + toDo.dueDate.getMonth()}/${toDo.dueDate.getDate()}/${toDo.dueDate.getFullYear()}`;
  dueDateDiv.classList.add('due-date');

  const deleteButton = document.createElement('input');
  deleteButton.type = 'image';
  deleteButton.src = deleteIcon;
  deleteButton.classList.add('delete-button');
  deleteButton.width = '30';
  deleteButton.height = '30';

  toDoElement.append(dropDownButton);
  toDoElement.append(titleDiv);
  toDoElement.append(dueDateDiv);
  toDoElement.append(deleteButton);

  return toDoElement
}

export {createToDoElement}