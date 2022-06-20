import { sprinkles } from "../styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const documentVars = sprinkles({
  backgroundColor: "baseGray",
  color: "white",
});

export const documentStyle = style({
  maxWidth: "1920px",
});
