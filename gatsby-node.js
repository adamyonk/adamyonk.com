const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

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
            id
            frontmatter {
              templateKey
              path
              date
              title
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "post" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.posts.edges
      .reduce((a, { node: { frontmatter: { tags } } }) => {
        for (const tag of tags) {
          a.add(tag)
        }
        return a
      }, new Set())
      .forEach(tag => {
        createPage({
          path: `/tags/${tag}`,
          component: path.resolve(`src/templates/tag.js`),
          context: { tag }, // additional data can be passed via context
        })
      })
    result.data.pages.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        context: {}, // additional data can be passed via context
      })
    })
  })
}
