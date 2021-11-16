import {taskItem} from './taskItem';

describe('taskItem', () => {
  it('calls a handler function when button is clicked', () => {
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const task = {id: 1, value: 'task 1', complete: false};
    const el = taskItem(task, deleteTask, completeTask);

    const delBtn = el.childNodes[1];
    delBtn.click();

    const compBtn = el.childNodes[2];
    compBtn.click();

    expect(deleteTask).toBeCalledTimes(1);
    expect(deleteTask).toBeCalledTimes(1);
  });
});
