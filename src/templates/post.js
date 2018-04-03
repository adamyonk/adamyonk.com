import React from "react"
import Helmet from "react-helmet"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Tags from "../components/Tags"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <React.Fragment>
      <Helmet title={`${post.frontmatter.title} | Adam Jahnke`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <Meta>
          Posted <Date date={post.frontmatter.date} /> under{" "}
          <Tags tags={post.frontmatter.tags} />
        </Meta>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }
      `}</style>
    </React.Fragment>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        tags
        title
      }
    }
  }
`
