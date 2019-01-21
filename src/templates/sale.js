import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Layout from "../components/layout"

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Adam Jahnke`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <Meta>
          {parseFloat(post.frontmatter.price).toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}
          {post.frontmatter.date && (
            <>
              {", posted "}
              <Date date={post.frontmatter.date} />
            </>
          )}
        </Meta>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <style jsx>{`
        h1 {
          margin-bottom: 0;
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SalePostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date
        path
        price
        title
      }
    }
  }
`
