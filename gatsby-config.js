const { formatPath } = require("./src/util/formatPath")

module.exports = {
  siteMetadata: {
    title: "Adam Jahnke ☕️🏍 (adamyonk)",
    description: "",
    siteUrl: "https://adamyonk.com",
    author: "Adam Jahnke",
  },
  plugins: [
    { resolve: "gatsby-plugin-typescript" },
    { resolve: "@rhysforyou/gatsby-plugin-react-helmet-async" },
    { resolve: "gatsby-plugin-styled-jsx" },
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
            name: "feed",
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
                      fileAbsolutePath
                      frontmatter {
                        date
                        updated
                        title
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({
              query: {
                site,
                allMarkdownRemark: { edges },
              },
            }) => {
              return edges.map(
                ({
                  node: {
                    html,
                    id,
                    fileAbsolutePath,
                    frontmatter: { link, title, date, updated },
                  },
                }) => {
                  return {
                    date,
                    date_modified: updated,
                    date_published: date,
                    external_url: link,
                    html,
                    id,
                    title,
                    url:
                      site.siteMetadata.siteUrl + formatPath(fileAbsolutePath),
                  }
                },
              )
            },
          },
          {
            name: "for-sale",
            query: `
              {
                allMarkdownRemark(
                  filter: { frontmatter: { templateKey: { eq: "sale" } } },
                  sort: { order: DESC, fields: [frontmatter___updated] }
                ) {
                  edges {
                    node {
                      html
                      fileAbsolutePath
                      id
                      frontmatter {
                        date
                        price
                        title
                        updated
                      }
                    }
                  }
                }
              }
            `,
            normalize: ({
              query: {
                site,
                allMarkdownRemark: { edges },
              },
            }) => {
              return edges.map(
                ({
                  node: {
                    html,
                    id,
                    fileAbsolutePath,
                    frontmatter: { price, title, date, updated },
                  },
                }) => {
                  return {
                    date,
                    date_modified: updated,
                    date_published: date,
                    html,
                    title: `${title}: ${price}`,
                    url:
                      site.siteMetadata.siteUrl + formatPath(fileAbsolutePath),
                  }
                },
              )
            },
          },
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
