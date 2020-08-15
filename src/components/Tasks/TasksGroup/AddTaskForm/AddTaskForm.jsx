import React, { useState } from "react";

import { connect } from "react-redux";
import { addTask } from "store/actions";

import { Button } from "components/UI";

import classes from "./AddTaskForm.module.scss";

import { plusSvg } from "assets/img";

const AddTaskForm = ({ listId, onAddTask }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    toggleFormVisibility();

    if (inputValue) {
      onAddTask(listId, inputValue);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleFormVisibility = () => {
    setInputValue("");
    setFormVisible(!formVisible);
  };

  const [formVisible, setFormVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={classes.AddTask}>
      {formVisible ? (
        <form onSubmit={handleFormSubmit} className={classes.AddTaskForm}>
          <input
            className={classes.AddTaskForm_input}
            placeholder="Task text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                toggleFormVisibility();
              }
            }}
            autoFocus
          />
          <Button
            color="green"
            onClick={handleFormSubmit}
            className={classes.AddTaskForm_button}
          >
            Add Task
          </Button>
          <Button
            color="gray"
            onClick={toggleFormVisibility}
            className={classes.AddTaskForm_button}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <button
          className={classes.AddTask_button}
          onClick={toggleFormVisibility}
        >
          <div className={classes.AddTask_buttonIcon}>
            <img src={plusSvg} alt="" />
          </div>
          <p className={classes.AddTask_buttonText}>New Task</p>
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTask: (listId, text) => dispatch(addTask(listId, text)),
  };
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
