import React, { useState } from "react";

import { connect } from "react-redux";
import { toggleTaskSelection, editTask, removeTask } from "store/actions";

import { Button } from "components/UI";

import classes from "./Task.module.scss";

import { editSvg, removeSvg } from "assets/img";

const Task = ({
  id,
  text,
  completed,
  onToggleTaskSelection,
  onEditTask,
  onRemoveTask,
}) => {
  const handleFormSubmit = () => {
    setEditing(false);

    if (inputValue && inputValue !== text) {
      onEditTask(id, inputValue);
    } else {
      setInputValue(text);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleEditing = () => {
    setInputValue(text);
    setEditing(!editing);
  };

  const handleToggleCheckbox = (event) => {
    event.stopPropagation();
    onToggleTaskSelection(id);
  };

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  return (
    <div className={classes.TaskContainer} onClick={handleToggleCheckbox}>
      {(editing && (
        <div className={classes.Task}>
          <form className={classes.TaskEditForm} onSubmit={handleFormSubmit}>
            <input
              className={classes.TaskEditForm_input}
              type="text"
              onChange={handleInputChange}
              value={inputValue}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  toggleEditing();
                }
              }}
              autoFocus
            />
            <Button
              className={classes.TaskEditForm_button}
              color="green"
              onClick={handleFormSubmit}
            >
              Save Changes
            </Button>
            <Button
              className={classes.TaskEditForm_button}
              color="gray"
              onClick={toggleEditing}
            >
              Cancel
            </Button>
          </form>
        </div>
      )) || (
        <div className={classes.Task} onClick={handleToggleCheckbox}>
          <input
            className={classes.Task_checkbox}
            type="checkbox"
            id={`input_editing-task_${id}`}
            checked={completed}
            onChange={() => onToggleTaskSelection(id)}
          />
          <label
            className={classes.Task_label}
            htmlFor={`input_editing-task_${id}`}
          >
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <p className={classes.Task_text}>{text}</p>
          <img
            className={classes.Task_removeButton}
            src={removeSvg}
            alt="remove"
            onClick={(event) => {
              event.stopPropagation();
              onRemoveTask(id);
            }}
          />
          <img
            className={classes.Task_editButton}
            src={editSvg}
            alt="edit"
            onClick={(e) => {
              e.stopPropagation();
              setEditing(!editing);
            }}
          />
        </div>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTaskSelection: (id) => dispatch(toggleTaskSelection(id)),
    onEditTask: (id, updatedText) => dispatch(editTask(id, updatedText)),
    onRemoveTask: (id) => dispatch(removeTask(id)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
