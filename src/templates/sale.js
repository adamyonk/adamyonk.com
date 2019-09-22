import React from "react"
import { Helmet } from "react-helmet-async"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Layout from "../components/layout"

export default ({ data }) => {
  const { markdownRemark: { html, frontmatter: { title, date, price } } } = data
  return (
    <Layout>
      <Helmet title={`${title} | Adam Jahnke`} />
      <a href="/for-sale">&laquo; Back to all</a>
      <article>
        <h1>{title}</h1>
        <Meta>
          {parseFloat(price).toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}
          {", "}
          <a href={`mailto:?subject=${title}&body=${window.location}`}>Email me about this</a>
          {date && (
            <>
              {", posted "}
              <Date date={date} />
            </>
          )}
        </Meta>
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
