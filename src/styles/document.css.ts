import { sprinkles } from "../css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

const baseStyles = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "black" },
    color: { lightMode: "black", darkMode: "white" },
  }),
  {
    fontSize: "15px",
    maxWidth: "1920px",
    overflowX: "hidden",
  },
]);

export default baseStyles;
