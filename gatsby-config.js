module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description: "",
    siteUrl: "https://adamyonk.com",
    author: "Adam Jahnke",
  },
  plugins: [
    { resolve: "gatsby-plugin-react-next" },
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-styled-jsx" },
    // {
    //   resolve: "gatsby-plugin-feed-generator",
    //   feedQuery: `
    //     {
    //       allMarkdownRemark(
    //         filter: { frontmatter: { templateKey: { eq: "post" } } }
    //         sort: { order: DESC, fields: [frontmatter___date] }
    //       ) {
    //         edges {
    //           node {
    //             html
    //             id
    //             frontmatter {
    //               date
    //               path
    //               title
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `,
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
  ],
}
