import React, { useState } from "react";

import "./ToggleButton.scss";

const ToggleButton = (props) => {
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(
    window.innerWidth < 700
  );

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 700;
    if (mobileSidebarVisible !== isMobile) {
      setMobileSidebarVisible(isMobile);
    }
  });

  return (
    mobileSidebarVisible && (
      <>
        <input
          className="ToggleButtonInput"
          id="toggle-button__input"
          type="checkbox"
        />
        <label className="ToggleButtonLabel" htmlFor="toggle-button__input">
          <span></span>
        </label>
      </>
    )
  );
};

export default ToggleButton;
