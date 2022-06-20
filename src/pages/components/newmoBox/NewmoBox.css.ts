import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../sprinkles.css";

export const NewmoBoxStyle = style({
  width: "300px",
  height: "300px",
  backgroundColor: "#363636",
  margin: "auto",
  borderRadius: "2rem",
  boxShadow: "16px 16px 32px #2b2b2b,-16px -16px 32px #414141",
});

//ある程度煮詰まってきたところでレシピを作成する。
// export const newmoRecipe = recipe({
//   base: [
//     sprinkles({
//       backgroundColor: "baseGray",
//     }),
//   ],
//   variants: {
//     radius: {},
//   },
// });
