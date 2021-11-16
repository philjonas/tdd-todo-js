import {createElement} from '../helpers/createElement';
import {taskItem} from './taskItem';

export const taskList = (tasks, deleteTask, completeTask) => {
  const elementList = tasks.map(task =>
    taskItem(task, deleteTask, completeTask)
  );
  return createElement('ul', elementList);
};
