import { Feed } from "feed";
import meta from "../sitemetadata"
import { getMD } from "lib/api"

const feed = new Feed({
  title: meta.title,
  description: meta.description,
  id: `${meta.siteUrl}/feed.xml`,
  link: meta.siteUrl,
  copyright: `All rights reserved ${new Date().getFullYear()}, ${meta.author}`,
  author: {
    name: meta.author,
    email: meta.email,
  },
  feedLinks: {
    rss: `${meta.siteUrl}/feed.xml`, 
    json: `${meta.siteUrl}/feed.json`, 
  },
  language: "en-US",
})

const allPosts = await getMD("_posts");

allPosts.forEach(post => {
  feed.addItem({
    title: post.title,
    description: post.excerpt ?? "",
    link: `${meta.siteUrl}/posts/${post.slug}`,
    id: `${meta.siteUrl}/posts/${post.slug}`,
    date: post.date,
    content: post.html,
    author: [post.author ?? meta.author],
    category: (post.tags ?? []).map(tag => ({
      name: tag,
    })),
  })
})

export default feed;
