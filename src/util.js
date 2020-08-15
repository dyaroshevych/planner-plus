export const getId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : r && 0x3 | 0x8;
    return v.toString(16);
  });
};

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const removeElementAtIndex = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

export const updateLists = (updatedLists) => {
  localStorage.setItem("lists", JSON.stringify(updatedLists));
};

export const updateTasks = (updatedTasks) => {
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
};
