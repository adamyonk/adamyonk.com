require("@babel/polyfill")
const path = require("path")
const { formatPath } = require("./src/util/formatPath")
const git = require("simple-git/promise")("./")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(`
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
  `)

  // Create an index page for each individual tag
  data.tags.group.forEach(({ fieldValue: tag }) => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve(`src/templates/tag.tsx`),
      context: { tag },
    })
  })
  // Create a tag index page
  createPage({
    path: `/tags`,
    component: path.resolve(`src/templates/tags.tsx`),
    context: { tags: data.tags.group },
  })

  // Generate all pages
  await Promise.all(
    data.pages.edges.map(
      async ({
        node: {
          fileAbsolutePath,
          id,
          frontmatter: { templateKey },
        },
      }) => {
        const commits = await git.log({ file: fileAbsolutePath })
        createPage({
          path: formatPath(fileAbsolutePath),
          component: path.resolve(
            `src/templates/${String(templateKey || "page")}.tsx`,
          ),
          context: { id, commits }, // additional data can be passed via context
        })
      },
    ),
  )
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
