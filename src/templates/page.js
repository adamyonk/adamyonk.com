import React from "react"
import { Helmet } from "react-helmet-async"
import { graphql } from "gatsby"
import Date from "../components/Date"
import Meta from "../components/Meta"
import Layout from "../components/layout"

export default ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date, updated, title },
    },
  },
}) => {
  return (
    <Layout>
      <article>
        <Helmet title={`${title} | Adam Jahnke`} />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {!!date && (
          <Meta>
            <em>
              {updated ? "Originally posted" : "Posted"} <Date date={date} />
              {updated && (
                <React.Fragment>
                  <br />
                  Updated <Date date={updated} />
                </React.Fragment>
              )}
            </em>
          </Meta>
        )}
      </article>
    </Layout>
  )
}

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
