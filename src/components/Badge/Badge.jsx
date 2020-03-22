import React from "react";

import "./Badge.scss";

const Badge = ({ color, className, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`badge ${className ? className : ""}`}
      style={{ backgroundColor: color }}
    />
  );
};

export default Badge;
