import React, { useEffect, useState } from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Layout from "../components/layout"

const Page = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, updated, title },
    },
  },
}) => {
  const [location, setLocation] = useState(undefined)
  useEffect(() => {
    setLocation(window.location)
  })
  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {(!!date || !!updated) && (
          <Meta>
            <em>
              {date && (
                <>
                  {updated ? "Originally posted " : "Posted "}
                  <Date date={date} />
                </>
              )}
              {updated && (
                <>
                  {date && <br />}
                  Updated <Date date={updated} />
                </>
              )}
            </em>
          </Meta>
        )}
        {location && (
          <Meta className="print-only">
            View this online at <a href={location.href}>{location.href}</a>
          </Meta>
        )}
      </article>
    </Layout>
  )
}
Page.displayName = "Page"
export default Page

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        date
        updated
        title
      }
    }
  }
`
