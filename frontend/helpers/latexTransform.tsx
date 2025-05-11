'use client'

import katex from 'katex'
import 'katex/dist/katex.min.css'

const LatexTransform = ({
  content,
  className = '',
  displayMode = false
}: {
  content: string
  className?: string
  displayMode?: boolean
}) => {
  let html = ''
  try {
    html = katex.renderToString(content, {
      throwOnError: false,
      displayMode
    })
  } catch (error) {
    console.error('Помилка рендерингу LaTeX:', error)
    html = content
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default LatexTransform
