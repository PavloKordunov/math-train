'use client';

import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';

const MathJaxProvider = ({ children }: { children: React.ReactNode }) => {
  const config = {
    loader: { load: ['[tex]/ams'] },
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      packages: { '[+]': ['ams'] },
    },
    svg: {
      fontCache: 'global',
    },
  };

  return <MathJaxContext config={config}>{children}</MathJaxContext>;
};

export default MathJaxProvider;