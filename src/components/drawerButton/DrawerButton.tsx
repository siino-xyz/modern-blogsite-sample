import { useRef, useEffect, useState } from "react";
import {
  isOpen,
  isClose,
  line,
  menuButton,
  buttonShadow,
} from "./DrawerButton.css";
import ToggleButtonTrigger from "src/hooks/toggleButton";

const DrawerButton = () => {
  const { openMenu, menuFunction } = ToggleButtonTrigger();

  return (
    <>
      <button
        className={`${menuButton} ${buttonShadow}`}
        onClick={() => menuFunction()}
      >
        <div className={`${line} ${openMenu ? isOpen : isClose}`}></div>
        <div className={`${line} ${openMenu ? isOpen : isClose}`}></div>
        <div className={`${line} ${openMenu ? isOpen : isClose}`}></div>
      </button>
    </>
  );
};

export default DrawerButton;
