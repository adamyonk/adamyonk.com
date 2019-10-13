import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet-async"
import PostList from "../components/PostList"
import Layout from "../components/layout"

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
      <Layout>
        <section className="section">
          <Helmet>
            <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          </Helmet>
          <p>
            I’m Adam Jahnke. I work on the Studio Platform at{" "}
            <a href="https://invisionapp.com">InVision</a>. I thoroughly enjoy
            writing code. I love to make the complex simple. I live in
            Springfield, Missouri with my beautiful wife{" "}
            <a
              title="oliviayonk on Twitter"
              href="https://twitter.com/oliviayonk"
            >
              Olivia
            </a>{" "}
            and son Phoenix.
          </p>
          <h2>Recent Posts:</h2>
          <PostList posts={posts} />
        </section>
      </Layout>
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
          fileAbsolutePath
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
