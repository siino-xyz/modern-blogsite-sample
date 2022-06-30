import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";
import { vars } from "src/css-utils/vars.css";

const ofs = vars.offset[1];
const ofsM = vars.offsetMinus[1];
const blur = `${12}px`;
const shadowBlack = vars.shadowColor.shadowSide;
const shadowWhite = vars.shadowColor.lightSide;
const ofsHovered = vars.offset[1];
const ofsMHovered = vars.offsetMinus[1];
const blurHovered = `${5}px`;

export const menuButton = style([
  sprinkles({
    background: "white",
    width: { mobile: "size-12", desktop: "size-14" },
    height: { mobile: "size-12", desktop: "size-14" },
    borderRadius: "br-3",
    position: "relative",
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

export const line = style([
  sprinkles({
    position: "absolute",
    width: "size-3/5",
    height: "size-1",
    background: "white",
    borderRadius: "br-3",
  }),
]);

export const isClose = style([
  {
    left: "21%",
    selectors: {
      "&:nth-child(1)": {
        top: "23%",
      },
      "&:nth-child(2)": {
        top: "46%",
      },
      "&:nth-child(3)": {
        bottom: "21%",
      },
    },
  },
]);

export const isOpen = style([
  {
    left: "21%",
    selectors: {
      "&:nth-child(1)": {
        top: "45%",
        transform: "rotate(45deg)",
      },
      "&:nth-child(2)": {
        display: "none",
      },
      "&:nth-child(3)": {
        bottom: "46%",
        transform: "rotate(-45deg)",
      },
    },
  },
]);
