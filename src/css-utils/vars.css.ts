import { createGlobalTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    "1": "8px",
    "2": "16px",
    "3": "24px",
    "4": "32px",
    "5": "40px",
    "6": "48px",
    "7": "56px",
    "8": "64px",
    "9": "72px",
  },
  sizes: {
    "size-0": "0px",
    "size-px": "1px",
    "size-0.5": "0.125rem",
    "size-1": "0.25rem",
    "size-1.5": "0.375rem",
    "size-2": "0.5rem",
    "size-2.5": "0.625rem",
    "size-3": "0.75rem",
    "size-3.5": "0.875rem",
    "size-4": "1rem",
    "size-5": "1.25rem",
    "size-6": "1.5rem",
    "size-7": "1.75rem",
    "size-8": "2rem",
    "size-9": "2.25rem",
    "size-10": "2.5rem",
    "size-11": "2.75rem",
    "size-12": "3rem",
    "size-14": "3.5rem",
    "size-16": "4rem",
    "size-20": "5rem",
    "size-24": "6rem",
    "size-28": "7rem",
    "size-32": "8rem",
    "size-36": "9rem",
    "size-40": "10rem",
    "size-44": "11rem",
    "size-48": "12rem",
    "size-52": "13rem",
    "size-56": "14rem",
    "size-60": "15rem",
    "size-64": "16rem",
    "size-72": "18rem",
    "size-80": "20rem",
    "size-96": "24rem",
    "size-auto": "auto",
    "size-1/2": "50%",
    "size-1/3": "33.333333%",
    "size-2/3": "66.666667%",
    "size-1/4": "25%",
    "size-2/4": "50%",
    "size-3/4": "75%",
    "size-1/5": "20%",
    "size-2/5": "40%",
    "size-3/5": "60%",
    "size-4/5": "80%",
    "size-1/6": "16.666667%",
    "size-2/6": "33.333333%",
    "size-3/6": "50%",
    "size-4/6": "66.666667%",
    "size-5/6": "83.333333%",
    "size-1/12": "8.333333%",
    "size-2/12": "16.666667%",
    "size-3/12": "25%",
    "size-4/12": "33.333333%",
    "size-5/12": "41.666667%",
    "size-6/12": "50%",
    "size-7/12": "58.333333%",
    "size-8/12": "66.666667%",
    "size-9/12": "75%",
    "size-10/12": "83.333333%",
    "size-11/12": "91.666667%",
    "size-full": "100%",
    "w-size-screen": "100vw",
    "h-size-screen": "100vh",
    "size-min": "min-content",
    "size-max": "max-content",
    "size-fit": "fit-content",
  },
  color: {
    white: "#EBEBEB",
    black: "#222222",
    "gray-50": colors.gray[50],
    "gray-100": colors.gray[100],
    "gray-200": colors.gray[200],
    "gray-300": colors.gray[300],
    "gray-400": colors.gray[400],
    "gray-500": colors.gray[500],
    "gray-600": colors.gray[600],
    "gray-700": colors.gray[700],
    "gray-800": colors.gray[800],
    "gray-900": colors.gray[900],
  },
  borderRadius: {
    none: "0",
    circle: "50%",
    "1": "8px",
    "2": "16px",
    "3": "24px",
    "4": "32px",
    "5": "40px",
    "6": "48px",
    "7": "56px",
    "8": "64px",
    "9": "72px",
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  lineHeight: {
    xs: "1rem",
    sm: "1.25rem",
    base: "1.5rem",
    lg: "1.75rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.5rem",
    "5xl": "1",
    "6xl": "1",
  },
});
