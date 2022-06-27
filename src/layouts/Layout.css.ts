import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const layoutStyle = style([
  sprinkles({
    marginX: "size-3",
  }),
  style({
    maxWidth: "1920px",
  }),
]);
