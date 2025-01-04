import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeRaw from "rehype-raw";
import rehypeStarryNight from "rehype-starry-night"
import { all } from '@wooorm/starry-night'
//import rehypePrismPlus from "rehype-prism-plus"


export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    //.use(rehypePrismPlus, { ignoreMissing: false })
    .use(rehypeStarryNight, { grammars: all })
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
