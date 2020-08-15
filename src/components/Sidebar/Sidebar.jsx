import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { removeList } from "store/actions";
import { updateObject } from "util.js";

import { Badge } from "components/UI";
import ToggleButton from "./ToggleButton/ToggleButton";
import AddListForm from "./AddListForm/AddListForm";

import classes from "./Sidebar.module.scss";

import { menuSvg, removeSvg, plusSvg } from "assets/img";

const Sidebar = ({ items, onRemoveList }) => {
  const removeList = (event, item) => {
    event.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${item.name}"?`)) {
      onRemoveList(item.id);
    }
  };

  const handleTogglePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <div className={classes.Sidebar}>
      <ToggleButton />
      <ul className={[classes.List, "Sidebar_List"].join(" ")}>
        <li>
          <NavLink
            to="/"
            exact
            className={classes.Item}
            activeClassName={classes.Item___active}
          >
            <img className={classes.Item_image} src={menuSvg} alt="Menu" />
            <span className={classes.Item_name}>All tasks</span>
          </NavLink>
        </li>
        {items.map((item, idx) => (
          <li key={item.id}>
            <NavLink
              to={`/lists/${idx}`}
              className={classes.Item}
              activeClassName={classes.Item___active}
            >
              <Badge className={classes.Item_badge} color={item.color} />
              <span className={classes.Item_name}>{item.name}</span>
              <img
                className={classes.Item_button}
                src={removeSvg}
                alt="remove"
                onClick={(e) => removeList(e, item)}
              />
            </NavLink>
          </li>
        ))}
        <li>
          <button
            className={[classes.Item, classes.Button].join(" ")}
            onClick={handleTogglePopup}
          >
            <img className={classes.Item_image} src={plusSvg} alt="Add" />
            <span className={classes.Item_name}>Add folder</span>
          </button>
        </li>
      </ul>
      <AddListForm onFormClose={handleTogglePopup} visible={visiblePopup} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.lists.data.map((list) => {
      const listColor = {
        color: state.colors[list.colorId].hex,
      };

      return updateObject(list, listColor);
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveList: (id) => dispatch(removeList(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
