import React from "react";

import classes from "./Button.module.scss";

const getButtonClasses = (className, color) => {
  const buttonClasses = [classes.Button];

  if (className) {
    buttonClasses.push(className);
  }

  switch (color) {
    case "green":
      buttonClasses.push(classes.Green);
      break;
    case "gray":
      buttonClasses.push(classes.Gray);
      break;
    default:
  }

  return buttonClasses.join(" ");
};

const Button = ({ className, color, children }) => (
  <button className={getButtonClasses(className, color)}>{children}</button>
);

export default Button;
