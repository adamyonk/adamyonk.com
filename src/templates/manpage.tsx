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
      <article className="manpage">
        <h1>
          <span>{title}</span>
          <span />
          <span>{title}</span>
        </h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h1>
          <span />
          <span>{updated && <Date date={updated} />}</span>
          <span>{title}</span>
        </h1>
        {location && (
          <Meta className="print-only">
            View this <a href={location.href}>online</a>
          </Meta>
        )}
      </article>
      <style jsx global>{`
        article {
          font-family: var(--monospace);
        }
        article h1 {
          display: flex;
          font-size: 1em;
          margin-bottom: 0;
          text-transform: uppercase;
        }
        article h1 span {
          flex: 1 1 33%;
        }
        article h1 span:nth-of-type(2) {
          text-align: center;
        }
        article h1 span:nth-of-type(3) {
          text-align: right;
        }
        article p {
          margin-left: 3em;
          text-align: justify;
        }
      `}</style>
    </Layout>
  )
}
Page.displayName = "Page"
export default Page

export const pageQuery = graphql`
  query ManPage($id: String!) {
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
