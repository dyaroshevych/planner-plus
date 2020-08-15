import React from "react";

import classes from "./Badge.module.scss";

const Badge = ({ color, className, onClick }) => {
  const badgeClasses = [classes.Badge];

  if (className) {
    badgeClasses.push(className);
  }

  return (
    <span
      onClick={onClick}
      className={badgeClasses.join(" ")}
      style={{ backgroundColor: color }}
    />
  );
};

export default Badge;
