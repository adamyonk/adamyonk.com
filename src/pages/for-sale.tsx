import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import PostList from "../components/PostList"
import Layout from "../components/layout"

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout>
      <section>
        <SEO title="For Sale" />
        <h1>For Sale</h1>
        <p>
          For updates, you can subscribe via <a href="/for-sale.xml">RSS</a> or{" "}
          <a href="/for-sale.json">JSON Feed</a>.
        </p>
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}

export const tagPageQuery = graphql`
  query SalePage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "sale" } } }
      sort: { order: DESC, fields: [frontmatter___updated] }
    ) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            date
            path
            title
            updated
            price
          }
        }
      }
    }
  }
`
