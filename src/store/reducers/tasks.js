import {
  ADD_TASK,
  TOGGLE_TASK_SELECTION,
  EDIT_TASK,
  REMOVE_TASK,
} from "store/actions/actionTypes";
import {
  getId,
  updateObject,
  updateTasks,
  removeElementAtIndex,
} from "util.js";

const initialState = {
  loading: false,
  error: false,
  data: JSON.parse(localStorage.getItem("tasks")) || [],
};

class Task {
  constructor(listId, text) {
    this.id = getId();
    this.listId = listId;
    this.text = text;
  }
}

const addTask = (state, action) => {
  const newTask = new Task(action.payload.listId, action.payload.text);

  const updatedState = {
    data: state.data.concat(newTask),
  };

  updateTasks(updatedState.data);

  return updateObject(state, updatedState);
};

const toggleTaskSelection = (state, action) => {
  const taskIndex = state.data.findIndex(
    (task) => task.id === action.payload.id
  );

  const updatedTasks = state.data.map((task) => {
    return { ...task };
  });

  updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;

  const updatedState = {
    data: updatedTasks,
  };

  updateTasks(updatedState.data);

  return updateObject(state, updatedState);
};

const editTask = (state, action) => {
  const taskIndex = state.data.findIndex(
    (task) => task.id === action.payload.id
  );

  const updatedTasks = state.data.map((task) => {
    return { ...task };
  });

  updatedTasks[taskIndex].text = action.payload.udpatedText;

  const updatedState = {
    data: updatedTasks,
  };

  updateTasks(updatedState.data);

  return updateObject(state, updatedState);
};

const removeTask = (state, action) => {
  const taskIndex = state.data.findIndex(
    (task) => task.id === action.payload.id
  );

  const updatedState = {
    data: removeElementAtIndex(state.data, taskIndex),
  };

  updateTasks(updatedState.data);

  return updateObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action);
    case TOGGLE_TASK_SELECTION:
      return toggleTaskSelection(state, action);
    case EDIT_TASK:
      return editTask(state, action);
    case REMOVE_TASK:
      return removeTask(state, action);
    default:
      return state;
  }
};
