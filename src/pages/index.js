import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import PostList from "../components/PostList"

export default class IndexPage extends React.Component {
  componentDidMount() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/"
          })
        }
      })
    }
  }

  render() {
    const { data } = this.props
    const { edges: posts = [] } = (data && data.allMarkdownRemark) || {}

    return (
      <section className="section">
        <Helmet>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>
        <p>
          I’m Adam Jahnke. I work on{" "}
          <a href="https://appoptics.com">AppOptics</a> at SolarWinds. I
          thoroughly enjoy writing code. I love to make the complex simple. I
          live in Springfield, Missouri with my beautiful wife{" "}
          <Link
            title="oliviayonk on Twitter"
            to="https://twitter.com/oliviayonk"
          >
            Olivia
          </Link>{" "}
          and son Phoenix.
        </p>
        <h2>Recent Posts:</h2>
        <PostList posts={posts} />
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "post" }, published: { eq: true } }
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
