import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";
import CodeBlock from "./CodeBlock";

function MarkdownRender(props) {
  const newProps = {
    ...props,
    escapeHtml: false,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      math: (props) => <MathJax.Node formula={props.value} />,
      inlineMath: (props) => <MathJax.Node inline formula={props.value} />,
      code: (props) => <CodeBlock language={props.language} value={props.value} />
    },
  };
  return (
    <MathJax.Provider>
      <ReactMarkdown {...newProps} />
    </MathJax.Provider>
  );
}

export default MarkdownRender;
