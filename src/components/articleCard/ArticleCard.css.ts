import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const card = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "black" },
  }),
  {
    transition: "transform 4s ease-in-out",
    ":hover": {
      cursor: "default",
      transform: "scale(2) rotate(720deg)",
    },
  },
]);
