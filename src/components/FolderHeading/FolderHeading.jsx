import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./FolderHeading.scss";
import editSvg from "../../assets/img/edit.svg";

const TaskHeading = ({ list, listIdx, listSelect, listEdit }) => {
  const listEditHandler = () => {
    setEditingFolder(false);
    if (folderInputValue && folderInputValue !== list.name) {
      listEdit(list.id, folderInputValue);
    }
  };

  const folderInputChangeHandler = e => {
    setFolderInputValue(e.target.value);
  };

  const toggleListEditHandler = () => {
    setFolderInputValue(list.name);
    setEditingFolder(!editingFolder);
  };

  const [editingFolder, setEditingFolder] = useState(false);
  const [folderInputValue, setFolderInputValue] = useState(list.name);

  const history = useHistory();

  return (
    <div>
      {editingFolder && (
        <div className="tasks__folder-edit">
          <input
            className="tasks__folder-edit-input field"
            type="text"
            onChange={folderInputChangeHandler}
            value={folderInputValue}
            onKeyDown={e => {
              if (e.key === "Enter") {
                listEditHandler();
              } else if (e.key === "Escape") {
                toggleListEditHandler();
              }
            }}
            autoFocus
          />
          <div
            className="tasks__folder-edit-button button button--green"
            onClick={listEditHandler}
          >
            Save Changes
          </div>
          <div
            className="tasks__folder-edit-button button button--gray"
            onClick={toggleListEditHandler}
          >
            Cancel
          </div>
        </div>
      )}
      {!editingFolder && (
        <div className="tasks__folder-heading">
          <h2
            className="tasks__folder-heading-text"
            style={{ color: list.color }}
            onClick={() => {
              listSelect(list.id);
              history.push(`/lists/${listIdx}`);
            }}
          >
            {list.name}
          </h2>
          <img
            className="tasks__folder-heading-edit"
            src={editSvg}
            alt="Edit"
            onClick={toggleListEditHandler}
          />
        </div>
      )}
    </div>
  );
};

export default TaskHeading;
