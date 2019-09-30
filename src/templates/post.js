import React from "react"
import { Helmet } from "react-helmet-async"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Tags from "../components/Tags"
import Layout from "../components/layout"

export default ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: { link, title, date, tags },
    },
  },
}) => {
  return (
    <Layout>
      <Helmet title={`${(timeToRead, title)} | Adam Jahnke`} />
      <article>
        <h1>{title}</h1>
        <Meta>
          Posted <Date date={date} /> under <Tags tags={tags} />
        </Meta>
        <Meta>{timeToRead} minute read</Meta>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
        link
        path
        tags
        title
      }
    }
  }
`
