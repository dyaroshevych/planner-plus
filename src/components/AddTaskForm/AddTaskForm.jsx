import React, { useState } from "react";

import "./AddTaskForm.scss";
import plusSvg from "../../assets/img/plus.svg";

const AddTaskForm = ({ addTask }) => {
  const clickAddTaskHandler = () => {
    if (taskInputValue) {
      addTask(taskInputValue);
      toggleAddTaskHandler();
    }
  };

  const taskInputChangeHandler = e => {
    setTaskInputValue(e.target.value);
  };

  const toggleAddTaskHandler = () => {
    setTaskInputValue("");
    setAddingTask(!addingTask);
    // if (editingFolder) {
    //   toggleEditFolderHandler();
    // }
  };

  const [addingTask, setAddingTask] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState("");
  // const [taskName, setTaskName] = useState("");

  // if (taskName !== list.name) {
  //   setFolderName(list.name);
  //   setFolderInputValue(list.name);
  //   setEditingFolder(false);
  // }

  return (
    <div className="tasks__item tasks__add-container">
      {addingTask ? (
        <div>
          <input
            className="tasks__add-input field"
            placeholder="Task text"
            value={taskInputValue}
            onChange={taskInputChangeHandler}
            onKeyDown={e => {
              if (e.key === "Enter") {
                clickAddTaskHandler();
              } else if (e.key === "Escape") {
                toggleAddTaskHandler();
              }
            }}
            autoFocus
          />
          <div
            className="tasks__add-submit button button--green"
            onClick={clickAddTaskHandler}
          >
            Add Task
          </div>
          <div
            className="tasks__add-cancel button button--gray"
            onClick={toggleAddTaskHandler}
          >
            Cancel
          </div>
        </div>
      ) : (
        <div className="tasks__add-button" onClick={toggleAddTaskHandler}>
          <div className="tasks__add-button-icon">
            <img src={plusSvg} alt="" />
          </div>
          <p className="tasks__item-name">New Task</p>
        </div>
      )}
    </div>
  );
};

export default AddTaskForm;
