import { Feed } from "feed";
import meta from "../sitemetadata"
import { getMD } from "lib/api"
import { markdownToBasicHtml } from "./markdownToHtml";

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

await Promise.all(allPosts.map(async post => {
  const html = (await markdownToBasicHtml(post.content || "")).replaceAll(/mailto:EMAIL/g, `mailto:${meta.email}?subject=${encodeURIComponent(post.title)}`);
  feed.addItem({
    title: post.title,
    description: post.excerpt ?? "",
    link: `${meta.siteUrl}/posts/${post.slug}`,
    id: `${meta.siteUrl}/posts/${post.slug}`,
    date: post.date,
    content: html,
    author: [post.author ?? meta.author],
    category: (post.tags ?? []).map(tag => ({
      name: tag,
    })),
  })
}))

export default feed;
