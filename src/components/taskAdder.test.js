import {taskAdder} from './taskAdder';

describe('taskAdder', () => {
  it('calls a handler function when button is clicked', () => {
    const handler = jest.fn();
    const el = taskAdder(handler);

    const input = el.childNodes[0];
    input.value = 'test';

    const addBtn = el.childNodes[1];
    addBtn.click();

    expect(handler).toBeCalledTimes(1);
    expect(input.value).toBe('');
  });

  it('deletes input when button is clicked', () => {
    const handler = jest.fn();
    const el = taskAdder(handler);

    const input = el.childNodes[0];
    input.value = 'test';

    const delBtn = el.childNodes[2];
    delBtn.click();

    expect(input.value).toBe('');
  });
});
