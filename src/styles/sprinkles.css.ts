import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { vars } from "./vars.css";

const responsiveStyles = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],

  properties: {
    display: ["none", "flex", "block", "inline", "inlineBlock", "grid"],
    flexDirection: ["row", "column"],
    gridTemplateColumns: vars.gridRepeat,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    gap: vars.space,
    textAlign: ["center", "left", "right"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    marginBottom: vars.space,
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    width: vars.width,
    maxWidth: vars.maxWidth,
    listStyleType: ["none", "circle", "inherit"],
    cursor: ["pointer", "none"],
    position: ["absolute", "relative", "inherit"],
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    margin: ["marginLeft", "marginRight", "marginTop", "marginBottom"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
});

const colorStyles = defineProperties({
  conditions: {
    // lightMode: { "@media": "(prefers-color-scheme: light)" },
    darkMode: {},
  },
  defaultCondition: "darkMode",
  properties: {
    color: vars.color,
    backgroundColor: vars.color,
  },
});

export const sprinkles = createSprinkles(responsiveStyles, colorStyles);
export type Sprinkles = Parameters<typeof sprinkles>[0];
