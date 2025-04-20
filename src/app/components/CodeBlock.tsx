"use client";

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  isDark?: boolean;
}

/**
 * A reusable code block component with syntax highlighting and theme toggle
 */
export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  showLineNumbers = true,
  className = '',
  isDark = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className={`rounded-lg overflow-hidden relative ${className}`}>
      {/* Controls */}
      <div className="relative">
        {/* Language badge */}
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2 py-1 text-base font-medium text-gray-50 bg-green-600/80 hover:bg-green-700/90 rounded cursor-pointer">
            {language}
          </span>
        </div>
        
        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-1 rounded text-gray-50 bg-green-600/80 hover:bg-green-700/90 cursor-pointer"
          aria-label={isCopied ? 'Copied!' : 'Copy code'}
        >
          {isCopied ? <FiCheck size={16} /> : <FiCopy size={16} />}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          padding: '2.5rem 1rem 1rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}; 