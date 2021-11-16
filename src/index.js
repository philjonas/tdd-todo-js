import {createElement} from './helpers/createElement';
import {taskList} from './components/taskList';
import {taskAdder} from './components/taskAdder';
import './index.css';
import {createTaskHandlers} from './helpers/createTaskHandlers';

(function (initialState) {
  const App = function(state) {
    const {addTask, deleteTask, completeTask} = createTaskHandlers(
      state,
      setAppState
    );

    const element = createElement(
      'div',
      [
        createElement('h1', 'JS ToDo App', {className: 'hello'}),
        taskAdder(addTask),
        taskList(state.tasks, deleteTask, completeTask),
      ],
      {id: 'app'}
    );

    return element;
  };

  const setAppState = prop => {
    if (document.contains(document.getElementById('app'))) {
      document.getElementById('app').remove();
    }
    document.body.appendChild(App({...App.state, ...prop}));
  };

  setAppState(initialState);
})({
  tasks: [
    {id: 1, value: 'task 1', complete: false},
    {id: 2, value: 'task 2', complete: false},
    {id: 3, value: 'task 3', complete: false},
  ],
  id: 3,
});
