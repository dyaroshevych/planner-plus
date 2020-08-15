import React, { useState } from "react";

import { connect } from "react-redux";
import { addList } from "store/actions";

import { Badge, Button } from "components/UI";

import classes from "./AddListForm.module.scss";

import { closeSvg } from "../../../assets/img";

const getBadgeClasses = (selectedColor, currentColorId) => {
  const badgeClasses = [classes.Badge];

  if (selectedColor === currentColorId) {
    badgeClasses.push(classes.Badge___active);
  }

  return badgeClasses.join(" ");
};

const AddListForm = ({ colors, onAddList, onFormClose, visible }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCloseForm = () => {
    setInputValue("");
    setSelectedColor(0);
    onFormClose();
  };

  const handleFormSubmit = () => {
    handleCloseForm();
    onAddList(inputValue ? inputValue : "New Folder", selectedColor);
  };

  const [selectedColor, setSelectedColor] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    visible && (
      <div className={classes.Container}>
        <form className={classes.AddListForm} onSubmit={handleFormSubmit}>
          <button className={classes.AddListForm_closeButton}>
            <img onClick={handleCloseForm} src={closeSvg} alt="close" />
          </button>
          <input
            value={inputValue}
            type="text"
            className={classes.AddListForm_input}
            placeholder="Folder name"
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleCloseForm();
              }
            }}
            autoFocus
          />
          <div className={classes.AddListForm_colorPalette}>
            {colors.map((color) => (
              <Badge
                key={color.id}
                color={colors[color.id].hex}
                className={getBadgeClasses(selectedColor, Number(color.id))}
                onClick={() => {
                  setSelectedColor(Number(color.id));
                }}
              />
            ))}
          </div>
          <Button className={classes.AddListForm_button} color="green">
            Add
          </Button>
        </form>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    colors: state.colors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddList: (name, colorId) => dispatch(addList(name, colorId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListForm);
