import { unified } from "unified";
import parse from "remark-parse";
import frontmatter from "remark-frontmatter";
import stringify from "remark-stringify";
// import prism from "remark-prism";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(frontmatter)
    .use(stringify)
    // .use(prism)
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}
