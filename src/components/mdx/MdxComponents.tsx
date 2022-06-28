import SyntaxHighlighter from "react-syntax-highlighter";

export const MdxComponents = {
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => <a {...props} />,
  li: (props) => <li {...props} />,
  SyntaxHighlighter,
};
