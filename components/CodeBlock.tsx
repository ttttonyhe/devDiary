import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "../styles/github";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  };

  static defaultProps = {
    language: null,
  };

  render() {
    const props: any = this.props;
    const { language, value } = props;
    return (
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;
