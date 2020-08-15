import {
  ADD_LIST,
  REMOVE_LIST,
  FETCH_LISTS_START,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAIL,
  EDIT_LIST,
} from "store/actions/actionTypes";
import {
  updateObject,
  updateLists,
  removeElementAtIndex,
  getId,
} from "util.js";

const initialState = {
  loading: false,
  error: false,
  data: JSON.parse(localStorage.getItem("lists")) || [],
};

class List {
  constructor(name, colorId) {
    this.id = getId();
    this.name = name;
    this.colorId = colorId;
  }
}

const fetchListsStart = (state) => {
  const updatedState = {
    loading: true,
  };

  return updateObject(state, updatedState);
};

const fetchListsSuccess = (state, action) => {
  const updatedState = {
    loading: false,
    error: false,
    data: action.payload.lists,
  };

  updateLists(updatedState.data);

  return updateObject(state, updatedState);
};

const fetchListsFail = (state) => {
  const updatedState = {
    loading: false,
    error: true,
  };

  return updateObject(state, updatedState);
};

const addList = (state, action) => {
  const newList = new List(action.payload.name, action.payload.colorId);

  const updatedState = {
    data: state.data.concat(newList),
  };

  updateLists(updatedState.data);

  return updateObject(state, updatedState);
};

const editList = (state, action) => {
  const listIndex = state.data.findIndex((list) => {
    return list.id === action.payload.id;
  });

  const updatedLists = state.data.map((list) => {
    return { ...list };
  });

  updatedLists[listIndex].name = action.payload.updatedName;

  const updatedState = {
    data: updatedLists,
  };

  updateLists(updatedState.data);

  return updateObject(state, updatedState);
};

const removeList = (state, action) => {
  const listIndex = state.data.findIndex(
    (list) => list.id === action.payload.id
  );

  const updatedState = {
    data: removeElementAtIndex(state.data, listIndex),
  };

  updateLists(updatedState.data);

  return updateObject(state, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTS_START:
      return fetchListsStart(state);
    case FETCH_LISTS_SUCCESS:
      return fetchListsSuccess(state, action);
    case FETCH_LISTS_FAIL:
      return fetchListsFail(state);
    case ADD_LIST:
      return addList(state, action);
    case EDIT_LIST:
      return editList(state, action);
    case REMOVE_LIST:
      return removeList(state, action);
    default:
      return state;
  }
};
