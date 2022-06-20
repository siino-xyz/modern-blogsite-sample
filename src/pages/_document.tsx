import { Html, Head, Main, NextScript } from "next/document";
import { documentVars, documentStyle } from "./_document.css";

export default function Document() {
  return (
    <Html lang="jp" className={`${documentStyle} ${documentVars}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
