'use client'

import { MathJaxContext } from 'better-react-mathjax'

const config = {
  loader: {
    load: [
      'input/tex-full', 
      'output/chtml',
      '[tex]/textmacros',
      '[tex]/ams',       
      '[tex]/unicode'     
    ]
  },
  tex: {
    packages: { '[+]': ['textmacros', 'ams', 'unicode'] },
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
  },
  chtml: {
    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2',
    scale: 1,
  },
}

export const MathJaxProvider = ({ children }: { children: React.ReactNode }) => {
  return <MathJaxContext config={config}>{children}</MathJaxContext>
}