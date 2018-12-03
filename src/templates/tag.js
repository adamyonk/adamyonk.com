import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import PostList from "../components/PostList"
import Layout from "../components/layout"

export default props => {
  const { edges: posts = [] } =
    (props.data && props.data.allMarkdownRemark) || {}
  return (
    <Layout>
      <section>
        <Helmet
          title={`Posts tagged "${props.pageContext.tag}" | Adam Jahnke`}
        />
        <h1>Posts tagged &laquo;{props.pageContext.tag}&raquo;</h1>
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
