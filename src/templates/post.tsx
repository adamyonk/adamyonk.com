import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Commits from "../components/Commits"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Tags from "../components/Tags"
import Layout from "../components/layout"

const Post = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { title, date, tags },
    },
  },
  pageContext: { commits },
}) => {
  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        <Meta>
          Posted <Date date={date} /> under <Tags tags={tags} />
        </Meta>
        <Meta>{timeToRead} minute read</Meta>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Commits commits={commits} />
      </article>
      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }
      `}</style>
    </Layout>
  )
}
Post.displayName = "Post"
export default Post

export const pageQuery = graphql`
  query BlogPostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      timeToRead
      frontmatter {
        date
        link
        path
        tags
        title
      }
    }
  }
`
