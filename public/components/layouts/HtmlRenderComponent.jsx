import React from 'react'

const HtmlRenderComponent = ({htmlContent }) => {
  return (
    <article className="blogSingle_content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}

export default HtmlRenderComponent