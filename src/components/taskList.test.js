import {taskList} from './taskList';

describe('taskList', () => {
  it('returns a task list given a valid input', () => {
    const deleteTask = jest.fn();
    const completeTask = jest.fn();
    const tasks = [
      {id: 1, value: 'task 1', complete: false},
      {id: 2, value: 'task 2', complete: false},
      {id: 3, value: 'task 3', complete: false},
    ];
    const el = taskList(tasks, deleteTask, completeTask);
    expect(el.childNodes.length).toBe(3);
  });
});
