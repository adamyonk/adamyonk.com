require("@babel/polyfill")
const path = require("path")
const { formatPath } = require("./src/util/formatPath")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      pages: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            html
            fileAbsolutePath
            id
            frontmatter {
              tags
              templateKey
              path
              date
              title
            }
          }
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    // Generate tag index pages
    data.pages.edges
      // Loop through all the posts and gather unique tags
      .reduce((a, { node: { frontmatter: { tags } } }) => {
        if (!tags) {
          return a
        }
        for (const tag of tags) {
          a.add(tag)
        }
        return a
      }, new Set())
      // Create an index for each tag
      .forEach(tag => {
        createPage({
          path: `/tags/${tag}`,
          component: path.resolve(`src/templates/tag.js`),
          context: { tag },
        })
      })

    // Generate all pages
    data.pages.edges.forEach(
      ({
        node: {
          fileAbsolutePath,
          id,
          frontmatter: { tags, templateKey },
        },
      }) => {
        createPage({
          path: formatPath(fileAbsolutePath),
          component: path.resolve(
            `src/templates/${String(templateKey || "page")}.js`,
          ),
          context: { id }, // additional data can be passed via context
        })
      },
    )
  })
}

// https://www.gatsbyjs.org/docs/schema-customization/#nested-types
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      link: String
      tags: [String!]
    }
  `
  createTypes(typeDefs)
}
