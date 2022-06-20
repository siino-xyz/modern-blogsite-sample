import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    "1/2": "50%",
    "1/5": "20%",
    auto: "auto",
  },
  width: {
    full: "100%",
  },
  maxWidth: {
    max: "1200px",
  },
  color: {
    baseGray: "#363636",
    white: "#EBEBEB",
    shadowGray: "#2B2B2B",
    shadowWhite: "#414141",
  },
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: {
    lr: "2.3rem",
    lg: "2rem",
    md: "1.5rem",
    base: "1rem",
    sm: "0.95rem",
  },
  gridRepeat: {
    "4x": "repeat(4, 1fr)",
  },
});
