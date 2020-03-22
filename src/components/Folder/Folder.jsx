import React from "react";

import Task from "../Task/Task";
import FolderHeading from "../FolderHeading/FolderHeading";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

import "./Folder.scss";

const Folder = ({
  list,
  listIdx,
  tasks,
  checkboxClick,
  addTask,
  editTask,
  removeTask,
  listSelect,
  editFolder
}) => {
  return (
    <div className="tasks__folder">
      <FolderHeading
        key={list.id}
        list={list}
        listIdx={listIdx}
        listSelect={listSelect}
        listEdit={editFolder}
      />
      <ul className="tasks__folder-list">
        {tasks.map(task => (
          <li key={task.id}>
            <Task
              task={task}
              toggleTask={checkboxClick}
              removeTask={removeTask}
              editTask={editTask}
            />
          </li>
        ))}
        <li>
          <AddTaskForm
            key={list.id}
            addTask={inputValue => addTask(list.id, inputValue)}
          />
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Folder);
