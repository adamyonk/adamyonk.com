import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Layout from "../components/layout"

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, date, price },
    },
  },
}) => {
  const [location, setLocation] = useState(undefined)
  useEffect(() => {
    setLocation(window.location)
  }, [location])

  return (
    <Layout>
      <SEO title={title} />
      <a href="/for-sale">&laquo; Back to all</a>
      <article>
        <h1>{title}</h1>
        <Meta>
          {parseFloat(price).toLocaleString("en-US", {
            currency: "USD",
            style: "currency",
          })}
          {", "}
          <a href={`mailto:?subject=${title}&body=${location}`}>
            email me about this
          </a>
          {date && (
            <>
              <br />
              {"Posted "}
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
  query SalePostByPath($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        path
        price
        title
      }
    }
  }
`
