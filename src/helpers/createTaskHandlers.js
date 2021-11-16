export const createTaskHandlers = (state, setState) => {
  const addTask = value => {
    const newId = state.id + 1;
    const newTasks = [{id: newId, value}, ...state.tasks];
    setState({id: newId, tasks: newTasks});
  };

  const deleteTask = id => {
    const newTasks = state.tasks.filter(x => x.id !== id);
    setState({...state, tasks: newTasks});
  };

  const completeTask = id => {
    const taskIndex = state.tasks.findIndex(x => x.id === id);
    if (taskIndex === -1) {
      return;
    }
    const task = {...state.tasks[taskIndex]};
    const updatedTask = {...task, complete: !task.complete};
    const newTasks = [
      ...state.tasks.slice(0, taskIndex),
      updatedTask,
      ...state.tasks.slice(taskIndex + 1),
    ];
    setState({...state, tasks: newTasks});
  };

  return {addTask, deleteTask, completeTask};
};
