import React from "react"
import Helmet from "react-helmet"
import Date from "../components/Date"
import Meta from "../components/Meta"

export default ({ data }) => {
  const { markdownRemark: post } = data
  const { date, updated, title } = post.frontmatter
  return (
    <article>
      <Helmet title={`${post.frontmatter.title} | Adam Jahnke`} />
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {!!date && (
        <Meta>
          <em>
            {updated ? "Originally posted" : "Posted"} <Date date={date} />
            {updated && (
              <React.Fragment>
                <br />Updated <Date date={updated} />
              </React.Fragment>
            )}
          </em>
        </Meta>
      )}
    </article>
  )
}

export const pageQuery = graphql`
  query Page($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        updated
        title
      }
    }
  }
`
