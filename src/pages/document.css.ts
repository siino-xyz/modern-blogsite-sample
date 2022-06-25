import { sprinkles } from "../css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const baseStyles = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "black" },
    color: { lightMode: "black", darkMode: "white" },
  }),
  {
    fontSize: "15px",
    maxWidth: "1920px",
  },
]);
