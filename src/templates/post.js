import React from "react"
import { Helmet } from "react-helmet-async"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Tags from "../components/Tags"
import Layout from "../components/layout"

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Adam Jahnke`} />
      <article>
        <h1>{post.frontmatter.title}</h1>
        <Meta>
          Posted <Date date={post.frontmatter.date} /> under{" "}
          <Tags tags={post.frontmatter.tags} />
        </Meta>
        <Meta>{post.timeToRead} minute read</Meta>
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
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date
        path
        tags
        title
      }
    }
  }
`
