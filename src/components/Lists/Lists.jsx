import React from "react";
import { useHistory } from "react-router-dom";
import Badge from "../Badge/Badge";

import removeSvg from "../../assets/img/remove.svg";
import "./Lists.scss";

const generateBadge = (icon, color) => {
  if (icon) {
    return (
      <span>
        <img src={icon} alt="Icon" />
      </span>
    );
  } else {
    return <Badge color={color} />;
  }
};

const Lists = ({ lists, listClick, listRemove }) => {
  const removeList = (event, item) => {
    event.stopPropagation();
    if (window.confirm(`Are you sure you want to delete "${item.name}"?`)) {
      listRemove(item.id);
    }
  };

  const history = useHistory();

  if (lists.length) {
    return (
      <ul className="sidebar__list">
        {lists.map((item, idx) => (
          <li
            key={item.id}
            className={
              item.active
                ? ["active", item.className].join(" ")
                : item.className
            }
            onClick={
              listClick
                ? listClick
                : () => history.push(idx ? `/lists/${idx}` : "/")
            }
          >
            {generateBadge(item.icon, true && item.color)}
            <span className="sidebar__list-item-name">{item.name}</span>
            {item.color && (
              <img
                className="sidebar__list-item-remove"
                src={removeSvg}
                alt="remove"
                onClick={e => removeList(e, item)}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export default Lists;
