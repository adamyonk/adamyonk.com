module.exports = {
  siteMetadata: {
    title: "Adam Jahnke ☕️🏍 (adamyonk)",
    description: "",
    siteUrl: "https://adamyonk.com",
    author: "Adam Jahnke",
  },
  plugins: [
    { resolve: "gatsby-plugin-react-helmet" },
    { resolve: "gatsby-plugin-styled-jsx" },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //             filter: {frontmatter: { draft: { ne: true } }}
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 fields { slug }
    //                 frontmatter {
    //                   title
    //                   date
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: "/rss.xml",
    //         title: "Gatsby RSS Feed",
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: "gatsby-plugin-feed-generator",
    //   options: {
    //     feedQuery: `
    //       {
    //         allMarkdownRemark(
    //           filter: { frontmatter: { templateKey: { eq: "post" }, published: { eq: true } } },
    //           sort: { order: DESC, fields: [frontmatter___date] }
    //         ) {
    //           edges {
    //             node {
    //               html
    //               id
    //               frontmatter {
    //                 date
    //                 path
    //                 title
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   },
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
            resolve: "gatsby-remark-prismjs",
            options: {
              inlineCodeMarker: "±",
            },
          },
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
