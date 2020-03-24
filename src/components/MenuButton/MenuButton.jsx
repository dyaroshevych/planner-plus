import React, { useState } from "react";

import "./MenuButton.scss";

const MenuButton = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(
    window.innerWidth < 700
  );

  window.addEventListener("resize", () => {
    const isMobile = window.innerWidth < 700;
    if (mobileMenuVisible !== isMobile) {
      setMobileMenuVisible(isMobile);
    }
  });

  return (
    mobileMenuVisible && (
      <>
        <input
          className="menu-button__input"
          id="menu-button__input"
          type="checkbox"
        />
        <label className="menu-button__label" htmlFor="menu-button__input">
          <span></span>
        </label>
      </>
    )
  );
};

export default MenuButton;
