import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const layoutStyle = style([
  sprinkles({
    paddingX: "size-3",
    marginX: "size-auto",
    width: { mobile: "size-full", desktop: "size-9/12" },
  }),
  style({
    maxWidth: "1920px",
  }),
]);
