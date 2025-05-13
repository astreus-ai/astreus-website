"use client";

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div className="bg-[#d7e1e1] px-3 py-1 my-6 border-2 border-[#1e1e1e] shadow-md codeblock-container">
      <SyntaxHighlighter 
        language={language} 
        style={nightOwl} 
        className="!text-sm !rounded-none overflow-x-auto border-2 border-[#1e1e1e] light-scrollbar"
        wrapLines={false}
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock; 