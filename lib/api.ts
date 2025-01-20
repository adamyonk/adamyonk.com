import fs from "fs";
import { join } from "path";
import meta from "../sitemetadata"
import matter from "gray-matter";
import * as s from "superstruct";
import markdownToHtml from "./markdownToHtml";

const authors = {
  adam: {
    name: "Adam Jahnke",
    email: "adamyonk@icloud.com",
    avatar: "https://secure.gravatar.com/avatar/95c4a6a54bb911712b9f153afff92f69?size=200",
  }
}

const Post = s.object({
  author: s.object({
    name: s.string(),
    email: s.string(),
    avatar: s.optional(s.string()),
  }),
  content: s.string(),
  html: s.string(),
  excerpt: s.optional(s.string()),
  coverImage: s.optional(s.string()),
  date: s.date(),
  slug: s.string(),
  published: s.optional(s.boolean()),
  tags: s.array(s.string()),
  title: s.string(),
});
export type Post = s.Infer<typeof Post>;

export function getPaths(dir: string) {
  return fs.readdirSync(join(process.cwd(), dir));
}

export async function getMDBySlug(dir: string, file: string) {
  const fullPath = join(join(process.cwd(), dir), file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const html = (await markdownToHtml(content || "")).replaceAll(/mailto:EMAIL/g, `mailto:${meta.email}?subject=${encodeURIComponent(data.title)}`);
  const slug = data.slug ?? file.replace(/\.md$/, "");
  let author;
  if (typeof data.author === "string" && Object.keys(authors).includes(data.author)) {
    author = authors[data.author as keyof typeof authors];
  }
  author ??= authors.adam
  let post = {
    ...data,
    date: new Date(data.date),
    author: author ?? authors.adam,
    content,
    html,
    slug,
    fullPath,
  };
  return s.mask(post, Post, "Could not parse post!");
}
//export const getMDBySlug = memoize(_getMDBySlug, (dir: string, file: string) => `${dir}/${file}`);

export async function getMDByFn(dir: string, fn: (post: Post) => boolean) {
  const posts = (await getMD(dir))
    .filter(fn);
  return posts;
}

export async function getMD(dir: string) {
  const files = getPaths(dir);
  const posts = (await Promise.all(files.map((file) => getMDBySlug(dir, file))))
    .filter((post) => post.published !== false)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
