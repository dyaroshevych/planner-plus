import React, { useState } from "react";

import { editSvg, removeSvg } from "../../assets/img";
import "./Task.scss";

const Task = ({ task, toggleTask, removeTask, editTask }) => {
  const taskEditHandler = () => {
    setEditingTask(false);
    if (taskInputValue && taskInputValue !== task.name) {
      editTask(task.id, taskInputValue);
    } else {
      setTaskInputValue(task.name);
    }
  };

  const taskInputChangeHandler = e => {
    setTaskInputValue(e.target.value);
  };

  const toggleTaskEditHandler = () => {
    setTaskInputValue(task.name);
    setEditingTask(!editingTask);
  };

  const [editingTask, setEditingTask] = useState(false);
  const [taskInputValue, setTaskInputValue] = useState(task.name);

  return (
    <div className="tasks__item-container">
      {editingTask && (
        <div className="tasks__item">
          <div className="tasks__item-edit-container">
            <input
              className="tasks__item-edit-input field"
              type="text"
              onChange={taskInputChangeHandler}
              value={taskInputValue}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  taskEditHandler();
                } else if (e.key === "Escape") {
                  toggleTaskEditHandler();
                }
              }}
              autoFocus
            />
            <div
              className="tasks__item-edit-button button button--green"
              onClick={taskEditHandler}
            >
              Save Changes
            </div>
            <div
              className="tasks__item-edit-button button button--gray"
              onClick={toggleTaskEditHandler}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
      {!editingTask && (
        <div className="tasks__item" onClick={() => toggleTask(task.id)}>
          <input
            className="tasks__item-checkbox"
            type="checkbox"
            id={`input__${task.listId}-${task.id}`}
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <label
            className="tasks__item-label"
            htmlFor={`input__${task.listId}-${task.id}`}
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
          <p className="tasks__item-name">{task.name}</p>
          <img
            className="tasks__item-remove"
            src={removeSvg}
            alt="remove"
            onClick={e => {
              removeTask(e, task.id);
            }}
          />
          <img
            className="tasks__item-edit"
            src={editSvg}
            alt="edit"
            onClick={e => {
              e.stopPropagation();
              setEditingTask(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(Task);
