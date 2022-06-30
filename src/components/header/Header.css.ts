import { style } from "@vanilla-extract/css";
import { sprinkles } from "src/css-utils/sprinkles.css";
import { vars } from "src/css-utils/vars.css";

const ofs = vars.offset[1];
const ofsM = vars.offsetMinus[1];
const blur = `${12}px`;
const shadowBlack = vars.shadowColor.shadowSide;
const shadowWhite = vars.shadowColor.lightSide;
const ofsHovered = vars.offset[1];
const ofsMHovered = vars.offsetMinus[1];
const blurHovered = `${5}px`;

export const header = style([
  sprinkles({
    position: "sticky",
    top: "none",
    left: "none",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: { mobile: "size-full", desktop: "size-full" },
    marginX: "size-auto",
    paddingY: "size-3",
    // paddingX: "size-3",
    background: "translucentBlur",
    marginBottom: "size-16",
  }),
  {
    backdropFilter: `blur(5px)`,
    zIndex: 130,
  },
]);

export const snsButton = style([
  sprinkles({
    borderRadius: "circle",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { mobile: "size-12", desktop: "size-14" },
    height: { mobile: "size-12", desktop: "size-14" },
  }),
]);

export const buttonShadow = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "blackLiner" },
    transition: "easeing-1",
  }),
  {
    boxShadow: `
        ${ofs} ${ofs} ${blur} ${shadowBlack},
        ${ofsM} ${ofsM} ${blur} ${shadowWhite},
        inset ${ofs} ${ofs} ${blur} transparent,
        inset ${ofsM} ${ofsM} ${blur} transparent
    `,
    ":hover": {
      boxShadow: `
        ${ofs} ${ofs} ${blur} transparent,
        ${ofsM} ${ofsM} ${blur} transparent,
        inset ${ofsHovered} ${ofsHovered} ${blurHovered} ${shadowBlack},
        inset ${ofsMHovered} ${ofsMHovered} ${blurHovered} ${shadowWhite}
      `,
    },
  },
]);
