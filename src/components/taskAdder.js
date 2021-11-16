import {createElement} from '../helpers/createElement';

export const taskAdder = addTask => {
  const input = createElement('input', null, {
    value: '',
  });
  const deleteValue = () => {
    input.value = '';
  };

  const addValue = () => {
    if (!input.value) {
      return;
    }
    addTask(input.value);
    deleteValue();
  };

  return createElement('div', [
    input,
    createElement('button', 'Add task', {
      onclick: () => addValue(),
    }),
    createElement('button', 'Clear Input', {
      onclick: () => deleteValue(),
    }),
  ]);
};
