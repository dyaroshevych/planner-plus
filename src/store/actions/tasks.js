import {
  ADD_TASK,
  TOGGLE_TASK_SELECTION,
  EDIT_TASK,
  REMOVE_TASK,
} from "store/actions/actionTypes";

export const addTask = (listId, text) => {
  return {
    type: ADD_TASK,
    payload: {
      listId,
      text,
    },
  };
};

export const toggleTaskSelection = (id) => {
  return {
    type: TOGGLE_TASK_SELECTION,
    payload: {
      id,
    },
  };
};

export const editTask = (id, updatedText) => {
  return {
    type: EDIT_TASK,
    disptach: {
      id,
      updatedText,
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id,
    },
  };
};
