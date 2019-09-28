module.exports = {
  siteMetadata: {
    title: "Adam Jahnke ☕️🏍 (adamyonk)",
    description: "",
    siteUrl: "https://adamyonk.com",
    author: "Adam Jahnke",
  },
  plugins: [
    { resolve: "@rhysforyou/gatsby-plugin-react-helmet-async" },
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
        rss: true,
        json: true,
        siteQuery: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            name: 'feed',
            query: `
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
            normalize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  html: edge.node.html,
                }
              })
            },
          },
          {
            name: 'for-sale',
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "sale" } } },
                  sort: { order: DESC, fields: [frontmatter___updated] }
                ) {
                  edges {
                    node {
                      html
                      id
                      frontmatter {
                        date
                        path
                        price
                        title
                        updated
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  title: edge.node.frontmatter.title,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  html: edge.node.html,
                }
              })
            },
          }
        ],
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
    // {
    //   resolve: `gatsby-plugin-webmention`,
    //   options: {
    //     username: "adamyonk.com",
    //     identity: {
    //       github: "adamyonk",
    //       twitter: "adamyonk"
    //     },
    //     mentions: true,
    //     pingbacks: true,
    //     // forwardPingbacksAsWebmentions: "https://example.com/endpoint",
    //     domain: "adamyonk.com",
    //     token: process.env.WEBMENTIONS_TOKEN
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "adamyonk.com",
    //     short_name: "adamyonk.com",
    //     start_url: "/",
    //     background_color: "#073642",
    //     theme_color: "#93a1a1",
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: "standalone",
    //     icon: "static/favicon.ico", // This path is relative to the root of the site.
    //     // An optional attribute which provides support for CORS check.
    //     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //     // Any invalid keyword or empty string defaults to `anonymous`
    //     crossOrigin: `use-credentials`,
    //   },
    // },
    // { resolve: "gatsby-plugin-offline" },
    { resolve: "gatsby-plugin-remove-serviceworker" },
  ],
}
