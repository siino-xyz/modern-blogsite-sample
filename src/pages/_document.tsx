import { Html, Head, Main, NextScript } from "next/document";
import { baseStyles } from "./document.css";

export default function Document() {
  return (
    <Html lang="jp">
      <Head />
      <body className={baseStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
