import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodePreview = (props: Props) => {
  return (
    <SyntaxHighlighter
      wrapLines={true}
      language="javascript"
      style={{ ...xonokai }}
      customStyle={styles}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

type Props = {
  children: string
};

const styles = {
  overflow: 'auto',
  width: '100%'
};


export default CodePreview;

