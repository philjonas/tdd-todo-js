import {createElement} from '../helpers/createElement';
import './taskItem.css';

export const taskItem = (task, deleteTask, completeTask) => {
  const lineThrough = task.complete && 'task-complete';
  return createElement(
    'li',
    [
      createElement('div', `${task.id}: ${task.value}`, {
        className: `task-value ${lineThrough}`,
      }),
      createElement('button', 'Delete', {
        onclick: () => deleteTask(task.id),
        className: 'task-btn',
      }),
      createElement('button', 'Completed', {
        onclick: () => completeTask(task.id),
        className: 'task-btn',
      }),
    ],
    {
      className: 'task-container',
    }
  );
};
