import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
        marginBottom: "size-3",
      })}
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className={sprinkles({
        fontSize: "2xl",
        lineHeight: "2xl",
      })}
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className={sprinkles({
        fontSize: "xl",
        lineHeight: "xl",
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
  SyntaxHighlighter,
};
