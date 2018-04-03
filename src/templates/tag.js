import React from "react"
import Helmet from "react-helmet"
import PostList from "../components/PostList"

export default props => {
  console.log(props)
  const { edges: posts = [] } =
    (props.data && props.data.allMarkdownRemark) || {}
  return (
    <section>
      <Helmet title={`Posts tagged "${props.pathContext.tag}" | Adam Jahnke`} />
      <h1>Posts tagged "{props.pathContext.tag}"</h1>
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
