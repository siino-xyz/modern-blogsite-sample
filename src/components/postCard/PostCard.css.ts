import { sprinkles } from "src/css-utils/sprinkles.css";
import { style } from "@vanilla-extract/css";
import { vars } from "src/css-utils/vars.css";

const ofs = vars.offset[1];
const ofsM = vars.offsetMinus[2];
const blur = `${18}px`;

const shadowBlack = vars.shadowColor.shadowSide;
const shadowWhite = vars.shadowColor.lightSide;

const ofsHovered = vars.offset[1];
const ofsMHovered = vars.offsetMinus[1];
const blurHovered = `${8}px`;

export const card = style([
  sprinkles({
    background: { lightMode: "white", darkMode: "blackLiner" },
    marginX: "size-auto",
    marginY: "size-8",
    padding: "size-5",
    borderRadius: "br-4",
    cursor: "pointer",
    width: { mobile: "size-4/5", tablet: "size-11/12", desktop: "size-3/6" },

    transition: "easeing-1",
  }),
  {
    overflowX: "hidden",
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
