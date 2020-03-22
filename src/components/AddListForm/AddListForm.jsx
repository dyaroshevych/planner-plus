import React, { useState } from "react";

import { Lists, Badge } from "../";

import { plusSvg, closeSvg } from "../../assets/img";
import "./AddListForm.scss";

const AddListForm = ({ colors, listAdd }) => {
  const togglePopupHandler = () => {
    setVisiblePopup(!visiblePopup);
  };

  const inputChangeHandler = e => {
    setInputValue(e.target.value);
  };

  const popupCloseHandler = () => {
    setVisiblePopup(false);
    setInputValue("");
    setSelectedColor(0);
  };

  const addListClickhandler = () => {
    popupCloseHandler();
    listAdd(inputValue ? inputValue : "New Folder", selectedColor);
  };

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Lists
        lists={[
          {
            id: "addTask",
            icon: plusSvg,
            name: "Add Folder",
            className: "sidebar__list-button",
            active: visiblePopup
          }
        ]}
        listClick={togglePopupHandler}
      />
      {visiblePopup ? (
        <div className="sidebar__popup-container">
          <div className="sidebar__popup">
            <img
              onClick={popupCloseHandler}
              className="sidebar__popup-close"
              src={closeSvg}
              alt="close"
            />
            <input
              value={inputValue}
              type="text"
              className="sidebar__popup-input field"
              placeholder="Folder name"
              onChange={inputChangeHandler}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  addListClickhandler();
                } else if (e.key === "Escape") {
                  popupCloseHandler();
                }
              }}
              autoFocus
            />
            <div className="sidebar__popup-colors">
              {colors.map(color => (
                <Badge
                  key={color.id}
                  color={colors[color.id].hex}
                  className={
                    selectedColor === Number(color.id) ? "active" : null
                  }
                  onClick={() => {
                    setSelectedColor(Number(color.id));
                  }}
                />
              ))}
            </div>
            <div
              className="sidebar__popup-button button button--green"
              onClick={addListClickhandler}
            >
              Add
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AddListForm;
