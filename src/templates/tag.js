import React from "react"
import PostList from "../components/PostList"

export default ({ data }) => {
  const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}
  return (
    <section className="section">
      <PostList posts={posts} />
    </section>
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
