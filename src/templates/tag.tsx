import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PostList from "../components/PostList"
import Layout from "../components/layout"

export default ({ data, pageContext: { tag } }) => {
  const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}
  return (
    <Layout>
      <SEO title={`Posts tagged &laquo;${tag}&raquo;`} />
      <section>
        <h1>Posts tagged &laquo;{tag}&raquo;</h1>
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query TagPage($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "post" }, tags: { in: [$tag] } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            date
            path
            tags
            title
          }
        }
      }
    }
  }
`
