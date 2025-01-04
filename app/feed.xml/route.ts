import Rss from "rss"
import meta from "../../sitemetadata"
import { getMD } from "lib/api"

export async function GET() {
  const feed = new Rss({
    title: meta.title,
    description: meta.description,
    feed_url: `${meta.siteUrl}/feed.xml`,
    site_url: meta.siteUrl,
    webMaster: `${meta.author} <${meta.email}>`,
    managingEditor: `${meta.author} <${meta.email}>`,
    language: "en-US",
  })

  const allPosts = await getMD("_posts");
  allPosts.forEach(post => {
    const author = post.author ? `${post.author.name} <${post.author.email}>` : `${meta.author} <${meta.email}>`
    feed.item({
      title: post.title,
      description: post.excerpt ?? "",
      date: post.date,
      url: `${meta.siteUrl}/posts/${post.slug}`,
      guid: `${meta.siteUrl}/posts/${post.slug}`,
      author,
      categories: post.tags ?? [],
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

