import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../sprinkles.css";
import { style } from "@vanilla-extract/css";
import { vars } from "../vars.css";

// const ofs = vars.offset[2];
// const ofsM = vars.offsetMinus[2];
// const blur = `${18}px`;

// const shadowBlack = vars.shadowColor.shadowSide;
// const shadowWhite = vars.shadowColor.lightSide;

// const ofsHovered = vars.offset[1];
// const ofsMHovered = vars.offsetMinus[1];
// const blurHovered = `${8}px`;

// export const boxShadow = recipe({
//   variants: {
//     shadow: {
//       boxShadow: `10px 10px 10px`,
//     },
//   },

//   base: [
//     sprinkles({
//       background: { lightMode: "white", darkMode: "blackLiner" },
//       cursor: "pointer",
//     }),
//     style({
//       transition: "all 0.5s ease-out",
//       boxShadow: `
//         ${ofs} ${ofs} ${blur} ${shadowBlack},
//         ${ofsM} ${ofsM} ${blur} ${shadowWhite},
//         inset ${ofs} ${ofs} ${blur} transparent,
//         inset ${ofsM} ${ofsM} ${blur} transparent
//     `,
//       ":hover": {
//         boxShadow: `
//         ${ofs} ${ofs} ${blur} transparent,
//         ${ofsM} ${ofsM} ${blur} transparent,
//         inset ${ofsHovered} ${ofsHovered} ${blurHovered} ${shadowBlack},
//         inset ${ofsMHovered} ${ofsMHovered} ${blurHovered} ${shadowWhite}
//       `,
//       },
//     }),
//   ],

//   defaultVariants: {
//     offset: "1",
//     offsetMinus: "1",
//     shadowBlur: "1",
//   },
// });

// export type ShadowVariants = RecipeVariants<typeof boxShadow>;
