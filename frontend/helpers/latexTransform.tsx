'use client'

import React from 'react'
import { MathJax, MathJaxContext } from 'better-react-mathjax'

const config = {
  loader: { load: ['[tex]/textmacros', '[tex]/ams'] },
  tex: {
    packages: { '[+]': ['textmacros', 'ams'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    ignoreHtmlClass: 'tex-ignore',
  }
}

const LatexTransform = ({
  content,
  className = '',
}: {
  content: string
  className?: string
}) => {
  let processedContent = content;

  const textAndFormulaPattern = /\\text\s*\{\s*([^A-Za-z0-9\s]*\s*[a-zA-Zа-яА-ЯіїєґІЇЄҐ]+(?:[\s\-_][a-zA-Zа-яА-ЯіїєґІЇЄҐ]+)*\s*)([^}]*)\}/g;
  processedContent = processedContent.replace(textAndFormulaPattern, (match, textPart, formulaPart) => {
    if (formulaPart.trim() !== '') { 
      if (/[\\_^]/.test(formulaPart) || formulaPart.includes('frac') || formulaPart.includes('sqrt')) {
        console.log(`Correcting pattern: \text{${textPart.trim()}} ${formulaPart.trim()}`);
        return `\\text{${textPart.trim()}} ${formulaPart.trim()}`;
      }
    }
    return match;
  });

  console.log("Content for MathJax:", processedContent);

  return (
    <MathJaxContext config={config}>
      <div className={`${className} break-words whitespace-pre-wrap`}>
        <MathJax dynamic>{processedContent}</MathJax>
      </div>
    </MathJaxContext>
  )
}

export default LatexTransform;