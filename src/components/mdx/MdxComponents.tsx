import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";

import { sprinkles } from "src/css-utils/sprinkles.css";

export const MdxComponents = {
  h1: (props) => (
    <h1
      className={sprinkles({
        color: "red-400",
        fontSize: "4xl",
        lineHeight: "4xl",
      })}
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className={sprinkles({
        fontSize: "3xl",
        lineHeight: "3xl",
        marginBottom: "size-4",
        marginTop: "size-12",
      })}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={sprinkles({
        fontSize: "2xl",
        lineHeight: "2xl",
        marginBottom: "size-4",
        marginTop: "size-12",
      })}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={sprinkles({
        fontSize: "xl",
        lineHeight: "xl",
        marginBottom: "size-4",
        marginTop: "size-12",
      })}
      {...props}
    />
  ),
  p: (props) => (
    <p
      className={sprinkles({
        marginY: "size-4",
        lineHeight: "lg",
        fontSize: "base",
      })}
      {...props}
    />
  ),
  a: (props) => <a {...props} />,
  li: (props) => <li {...props} />,
  SyntaxHighlighter: (props) => (
    <SyntaxHighlighter
      language="javascript"
      style={a11yDark}
      {...props}
      className={sprinkles({
        borderRadius: "br-3",
      })}
    />
  ),
};
