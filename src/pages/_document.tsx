import { Html, Head, Main, NextScript } from "next/document";
import baseStyles from "../styles/document.css";

export default function Document() {
  return (
    <Html lang="jp">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link> */}
      </Head>
      <body className={baseStyles}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
