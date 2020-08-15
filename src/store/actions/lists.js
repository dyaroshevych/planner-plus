import {
  FETCH_LISTS_START,
  FETCH_LISTS_SUCCESS,
  FETCH_LISTS_FAIL,
  ADD_LIST,
  EDIT_LIST,
  REMOVE_LIST,
} from "store/actions/actionTypes";
import axios from "axios.js";

const fetchListsStart = () => {
  return {
    type: FETCH_LISTS_START,
  };
};

const fetchListsSuccess = (lists) => {
  return {
    type: FETCH_LISTS_SUCCESS,
    payload: {
      lists,
    },
  };
};

const fetchListsFail = () => {
  return {
    type: FETCH_LISTS_FAIL,
  };
};

export const fetchLists = () => (dispatch) => {
  const lists = JSON.parse(localStorage.getItem("lists"));

  if (lists) {
    dispatch(fetchListsSuccess(lists));
  } else {
    dispatch(fetchListsStart());

    axios
      .get("/lists.json")
      .then(({ data }) => {
        dispatch(fetchListsSuccess(data));
      })
      .catch(() => dispatch(fetchListsFail()));
  }
};

export const addList = (name, colorId) => {
  return {
    type: ADD_LIST,
    payload: {
      name,
      colorId,
    },
  };
};

export const editList = (id, updatedName) => {
  return {
    type: EDIT_LIST,
    payload: {
      id,
      updatedName,
    },
  };
};

export const removeList = (id) => {
  return {
    type: REMOVE_LIST,
    payload: {
      id,
    },
  };
};
