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
    //               url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
    //               guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
    //               custom_elements: [{ "content:encoded": edge.node.html }],
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allMarkdownRemark(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [frontmatter___date] },
    //             filter: {frontmatter: {
    //               published: { eq: true },
    //               templateKey: { eq: "post" },
    //             }}
    //           ) {
    //             edges {
    //               node {
    //                 excerpt
    //                 html
    //                 id
    //                 frontmatter {
    //                   date
    //                   path
    //                   title
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
    {
      resolve: "gatsby-plugin-feed-generator",
      options: {
        feedQuery: `
          {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "post" }, published: { eq: true } } },
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  html
                  id
                  frontmatter {
                    date
                    path
                    title
                  }
                }
              }
            }
          }
        `,
      },
    },
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
              backgroundColor: "transparent",
              linkImagesToOriginal: true,
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "adamyonk.com",
        identity: {
          github: "adamyonk",
          twitter: "adamyonk"
        },
        mentions: true,
        pingbacks: true,
        // forwardPingbacksAsWebmentions: "https://example.com/endpoint",
        domain: "adamyonk.com",
        token: process.env.WEBMENTIONS_TOKEN
      }
    }
  ],
}
