import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { editList } from "store/actions";

import { Button } from "components/UI";

import classes from "./GroupHeading.module.scss";

import { editSvg } from "assets/img";

const GroupHeading = ({ list, colors, listIdx, onEditList }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setEditing(false);

    if (inputValue && inputValue !== list.name) {
      onEditList(list.id, inputValue);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleEditing = () => {
    setInputValue(list.name);
    setEditing(!editing);
  };

  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(list.name);

  return (
    <div>
      {(editing && (
        <form className={classes.GroupHeadingForm} onSubmit={handleFormSubmit}>
          <input
            className={classes.GroupHeadingForm_input}
            type="text"
            onChange={handleInputChange}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleToggleEditing();
              }
            }}
            autoFocus
          />
          <Button
            className={classes.GroupHeadingForm_button}
            color="green"
            onClick={handleFormSubmit}
          >
            Save Changes
          </Button>
          <Button
            className={classes.GroupHeadingForm_button}
            color="gray"
            onClick={handleToggleEditing}
          >
            Cancel
          </Button>
        </form>
      )) || (
        <div className={classes.GroupHeading}>
          <NavLink to={`/lists/${listIdx}`}>
            <h2
              className={classes.GroupHeading_text}
              style={{ color: colors[list.colorId].hex }}
            >
              {list.name}
            </h2>
          </NavLink>
          <button
            onClick={handleToggleEditing}
            className={classes.GroupHeading_button}
          >
            <img src={editSvg} alt="Edit" />
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEditList: (id, updatedName) => dispatch(editList(id, updatedName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupHeading);
