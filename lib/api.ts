import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import * as s from "superstruct";

const Post = s.object({
  author: s.object({
    name: s.string(),
    picture: s.optional(s.string()),
  }),
  content: s.string(),
  excerpt: s.optional(s.string()),
  coverImage: s.optional(s.string()),
  date: s.string(),
  slug: s.string(),
  published: s.optional(s.boolean()),
  tags: s.array(s.string()),
  title: s.string(),
});
export type Post = s.Infer<typeof Post>;

export function getPaths(dir: string) {
  return fs.readdirSync(join(process.cwd(), dir));
}

export async function getMDBySlug(dir: string, slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(join(process.cwd(), dir), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  let post = {
    ...data,
    content,
    slug,
  };
  return s.mask(post, Post, "Could not parse post!");
}

export async function getMD(dir: string) {
  const slugs = getPaths(dir);
  const posts = (await Promise.all(slugs.map((slug) => getMDBySlug(dir, slug))))
    .filter((post) => post.published !== false)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}