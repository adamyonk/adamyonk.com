import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import PostList from "../components/PostList"
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
  const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}
  return (
    <Layout>
      <section>
        <Helmet title={`For Sale | Adam Jahnke`} />
        <h1>For Sale</h1>
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query SalePage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "sale" } } }
      sort: { order: DESC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            price
          }
        }
      }
    }
  }
`
