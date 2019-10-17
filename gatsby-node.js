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

      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    // Create an index page for each individual tag
    data.tags.group.forEach(({ fieldValue: tag }) => {
      createPage({
        path: `/tags/${tag}`,
        component: path.resolve(`src/templates/tag.tsx`),
        context: { tag }
      });
    });
    createPage({
      path: `/tags`,
      component: path.resolve(`src/templates/tags.tsx`),
      context: { tags: data.tags.group }
    });

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
            `src/templates/${String(templateKey || "page")}.tsx`,
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
