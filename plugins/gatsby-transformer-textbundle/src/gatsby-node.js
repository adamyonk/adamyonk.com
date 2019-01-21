const path = require("path")
const { parse } = require("./lib/parse")
const crypto = require("crypto")

async function onCreateNode(
  { node, actions, loadNodeContent, createNodeId, createContentDigest },
  pluginOptions,
) {
  const { createNode, createParentChildLink } = actions
  if (
    node.internal.type !== "File" ||
    !node.internal.description.match(/\.ulysses\/Text\.txt"$/)
  ) {
    return
  }

  const bundlePath = path.dirname(node.absolutePath)
  const filename = path.basename(bundlePath, ".ulysses")
  const { content, data, excerpt } = await parse(bundlePath)

  const childNode = {
    id: createNodeId(`${node.id} >>> MarkdownRemark`),
    children: [],
    parent: node.id,
    internal: {
      content,
      type: "MarkdownRemark",
    },
    frontmatter: {
      _PARENT: node.id,
      date: new Date().toString(),
      path: `/${(data.title || filename)
        .replace(/ /g, "-")
        .replace(/[^\w-]/g, "")}`,
      tags: [],
      title: "",
      ...data,
    },
    excerpt,
    rawMarkdownBody: content,
    fileAbsolutePath: `${node.absolutePath}`,
  }

  childNode.internal.contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(childNode))
    .digest(`hex`)

  createNode(childNode, { name: `gatsby-transformer-remark` })
  createParentChildLink({ parent: node, child: childNode })
}

exports.onCreateNode = onCreateNode
