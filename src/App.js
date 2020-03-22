import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import DEFAULT_DATA from "./defaultData.json";
import uuidv4 from "./uuidv4";

import { Lists, AddListForm, Folder } from "./components";

import { menuSvg } from "./assets/img";
import "./App.scss";

const allTasksItem = {
  id: "allTasks",
  icon: menuSvg,
  name: "All tasks",
  active: true
};

const App = () => {
  const updateLists = newLists => {
    localStorage.setItem("lists", JSON.stringify(newLists));
    setLists(newLists);
  };

  const updateTasks = newTasks => {
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  //If lists are already in localStorage, get them from there. Otherwise, get default lists from JSON file.
  const generateLists = () => {
    const localLists = JSON.parse(localStorage.getItem("lists"));
    if (localLists) {
      return localLists;
    } else {
      const generatedLists = [
        { ...allTasksItem },
        ...DEFAULT_DATA.lists.map(list => {
          list.color = colors[list.colorId].hex;
          return list;
        })
      ];
      localStorage.setItem("lists", JSON.stringify(generatedLists));
      return generateLists;
    }
  };

  //If tasks are already in localStorage, get them from there. Otherwise, get default tasks from JSON file.
  const generateTasks = () => {
    const localTasks = JSON.parse(localStorage.getItem("tasks"));
    if (localTasks) {
      return localTasks;
    } else {
      localStorage.setItem("tasks", JSON.stringify(DEFAULT_DATA.tasks));
      return DEFAULT_DATA.tasks;
    }
  };

  //Selects a particular list(makes it active)
  const listSelectHandler = listId => {
    const updatedLists = [...lists];
    for (let i = 0; i < updatedLists.length; i++) {
      if (updatedLists[i].active) {
        updatedLists[i].active = false;
      }
      if (updatedLists[i].id === listId) {
        updatedLists[i].active = true;
      }
    }
    updateLists(updatedLists);
  };

  //adds new list to localStorage
  const listAddHandler = (name, colorId) => {
    const newList = {
      id: uuidv4(),
      name: name,
      colorId: colorId
    };
    newList.color = colors[newList.colorId].hex;
    if (lists.length) {
      updateLists([...lists, newList]);
    } else {
      updateLists([{ ...allTasksItem }, newList]);
    }
    history.push(`/lists/${lists.length}`);
  };

  //deletes list by ID, saves changes to localStorage
  const listRemoveHandler = listId => {
    let updatedLists = [];
    if (lists.length > 2) {
      updatedLists = [...lists];
      const listIdx = updatedLists.findIndex(list => list.id === listId);
      if (updatedLists[listIdx].active) {
        updatedLists[0].active = true;
        history.replace("/");
      }
      updatedLists.splice(listIdx, 1);
    } else {
      history.push("/");
    }
    const updatedTasks = tasks.filter(task => task.listId !== listId);
    updateLists(updatedLists);
    updateTasks(updatedTasks);
  };

  //saves changes to local storage after clicking the checkbox to toggle "completed" value of particular task
  const checkboxClickHandler = taskId => {
    const taskIdx = tasks.findIndex(task => task.id === taskId);
    const updatedTasks = [...tasks];

    updatedTasks[taskIdx].completed = !updatedTasks[taskIdx].completed;

    updateTasks(updatedTasks);
  };

  //adds task to local storage
  const taskAddHandler = (listId, taskText) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuidv4(),
      listId: listId,
      name: taskText,
      completed: false
    });

    updateTasks(updatedTasks);
  };

  //saves task cahnges to local storage
  const taskEditHandler = (taskId, newName) => {
    const taskIdx = tasks.findIndex(task => task.id === taskId);
    const updatedTasks = [...tasks];
    updatedTasks[taskIdx].name = newName;

    updateTasks(updatedTasks);
  };

  //removes task from local storag
  const taskRemoveHandler = (e, taskId) => {
    e.stopPropagation();
    const updatedTasks = [...tasks];
    const taskIdx = tasks.findIndex(task => task.id === taskId);
    updatedTasks.splice(taskIdx, 1);

    updateTasks(updatedTasks);
  };

  //saves folder cahnges to local storage
  const folderEditHandler = (listId, newName) => {
    const listIdx = lists.findIndex(list => list.id === listId);
    const updatedLists = [...lists];
    updatedLists[listIdx].name = newName;

    updateLists(updatedLists);
  };

  const toggleMenuHandler = () => {};

  const colors = DEFAULT_DATA.colors;
  const [lists, setLists] = useState(generateLists());
  const [tasks, setTasks] = useState(generateTasks());
  const [menuVisible, setMenuVisible] = useState(window.innerWidth > 700);

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 700;
    if (menuVisible === isMobile) {
      setMenuVisible(!isMobile);
    }
  });

  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === "/") {
      listSelectHandler("allTasks");
    } else {
      const listIdx = Number(history.location.pathname.split("lists/")[1]);
      if (listIdx && listIdx < lists.length) {
        listSelectHandler(lists[listIdx].id);
      } else {
        history.replace("/");
      }
    }
  }, [lists.length, history.location.pathname]);

  return (
    <div className="todo">
      {menuVisible ? (
        <div className="sidebar">
          <Lists lists={lists} listRemove={listRemoveHandler} />
          <AddListForm colors={colors} listAdd={listAddHandler} />
        </div>
      ) : (
        <div className="todo__menu-button" onClick={toggleMenuHandler}>
          menu
        </div>
      )}

      <div className="tasks">
        <Switch>
          <Route exact path="/">
            {() => {
              if (!tasks.length) {
                return <div className="tasks__blank">No Tasks Yet</div>;
              }
              return lists.map((list, idx) => {
                const currentTasks = tasks.filter(
                  task => task.listId === list.id
                );
                if (list.id !== "allTasks") {
                  return (
                    <Folder
                      key={list.id}
                      list={list}
                      listIdx={idx}
                      tasks={currentTasks}
                      checkboxClick={checkboxClickHandler}
                      addTask={taskAddHandler}
                      editTask={taskEditHandler}
                      removeTask={taskRemoveHandler}
                      listSelect={listSelectHandler}
                      editFolder={folderEditHandler}
                    />
                  );
                }
                return null;
              });
            }}
          </Route>
          <Route path="/lists/">
            {() => {
              const activeListIdx = lists.findIndex(list => list.active);
              if (activeListIdx === -1) {
                history.replace("/");
                return null;
              }
              return (
                <Folder
                  list={lists[activeListIdx]}
                  listIdx={activeListIdx}
                  tasks={tasks.filter(
                    task => task.listId === lists[activeListIdx].id
                  )}
                  checkboxClick={checkboxClickHandler}
                  addTask={taskAddHandler}
                  editTask={taskEditHandler}
                  removeTask={taskRemoveHandler}
                  listSelect={listSelectHandler}
                  editFolder={folderEditHandler}
                />
              );
            }}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
