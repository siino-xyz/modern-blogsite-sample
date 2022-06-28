import { MDXProvider } from "@mdx-js/react";
import "../css-utils/reset.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
