import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import { connect } from "react-redux";

import TasksGroup from "./TasksGroup/TasksGroup";

import classes from "./Tasks.module.scss";

const SelectedTask = (lists, tasks, id) => {
  id = Number(id);

  if (Number.isNaN(id) || id < 0 || id >= lists.length) {
    return <Redirect to="/" />;
  }

  return (
    <TasksGroup
      list={lists[id]}
      listIdx={id}
      tasks={tasks.filter((task) => task.listId === lists[id].id)}
    />
  );
};

const Tasks = ({ tasks, lists }) => {
  const id = useLocation().pathname.split("/lists/")[1];

  if (tasks.length === 0 && !id) {
    return (
      <div className={classes.Tasks}>
        <div className={classes.Tasks_blank}>No Tasks Yet</div>
      </div>
    );
  }

  return (
    <div className={classes.Tasks}>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            lists.map((list, idx) => (
              <TasksGroup key={list.id} list={list} listIdx={idx} />
            ))
          }
        />
        <Route
          path="/lists/:id"
          component={() => SelectedTask(lists, tasks, id)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists.data.map((list) => {
      return { ...list };
    }),
    tasks: state.tasks.data.map((task) => {
      return { ...task };
    }),
  };
};

export default connect(mapStateToProps)(Tasks);
