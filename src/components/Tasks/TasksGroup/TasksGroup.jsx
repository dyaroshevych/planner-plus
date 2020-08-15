import React from "react";

import { connect } from "react-redux";

import Task from "./Task/Task";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import GroupHeading from "./GroupHeading/GroupHeading";

import classes from "./TasksGroup.module.scss";

const TasksGroup = ({ list, listIdx, tasks }) => (
  <>
    <GroupHeading key={list.id} list={list} listIdx={listIdx} />
    <ul className={classes.TasksGroup}>
      {tasks
        .filter((task) => task.listId === list.id)
        .map((task) => (
          <li key={task.id}>
            <Task id={task.id} text={task.text} completed={task.completed} />
          </li>
        ))}
      <li>
        <AddTaskForm key={list.id} listId={list.id} />
      </li>
    </ul>
  </>
);

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.data,
  };
};

export default connect(mapStateToProps)(TasksGroup);
