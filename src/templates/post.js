import React from "react"
import Helmet from "react-helmet"
import Date from "../components/Date"
import Tags from "../components/Tags"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <React.Fragment>
      <Helmet title={`Blog | ${post.frontmatter.title}`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <div className="post-meta">
          Posted <Date date={post.frontmatter.date} /> under{" "}
          <Tags tags={post.frontmatter.tags} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }
        .post-meta {
          font-size: 0.8em;
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
