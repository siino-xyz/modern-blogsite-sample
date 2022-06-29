import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs/index";

const CodeBlock = () => {
  return (
    <SyntaxHighlighter language="javascript" style={a11yDark}>
      {`
    const doStuff = () => {
      return console.log('hey')
    }
  `}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
