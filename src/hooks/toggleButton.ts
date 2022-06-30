import { useState } from "react";

export const ToggleButtonTrigger = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return { openMenu, menuFunction };
};

export default ToggleButtonTrigger;
