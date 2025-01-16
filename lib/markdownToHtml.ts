import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeStarryNight from "@microflash/rehype-starry-night";

import sourceApplescript from '@wooorm/starry-night/source.applescript';
import sourceCss from '@wooorm/starry-night/source.css';
import sourceCssLess from '@wooorm/starry-night/source.css.less';
import sourceCssScss from '@wooorm/starry-night/source.css.scss';
import sourceDiff from '@wooorm/starry-night/source.diff';
import sourceIni from '@wooorm/starry-night/source.ini';
import sourceJs from '@wooorm/starry-night/source.js';
import sourceJson from '@wooorm/starry-night/source.json';
import sourceLua from '@wooorm/starry-night/source.lua';
import sourceMakefile from '@wooorm/starry-night/source.makefile';
import sourcePython from '@wooorm/starry-night/source.python';
import sourceRuby from '@wooorm/starry-night/source.ruby';
import sourceShell from '@wooorm/starry-night/source.shell';
import sourceSql from '@wooorm/starry-night/source.sql';
import sourceTs from '@wooorm/starry-night/source.ts';
import sourceYaml from '@wooorm/starry-night/source.yaml';
import textHtmlBasic from '@wooorm/starry-night/text.html.basic';
import textMd from '@wooorm/starry-night/text.md';
import textXml from '@wooorm/starry-night/text.xml';
import textXmlSvg from '@wooorm/starry-night/text.xml.svg';

const grammars = [
  sourceApplescript,
  sourceCss,
  sourceCssLess,
  sourceCssScss,
  sourceDiff,
  sourceIni,
  sourceJs,
  sourceJson,
  sourceLua,
  sourceMakefile,
  sourcePython,
  sourceRuby,
  sourceShell,
  sourceSql,
  sourceTs,
  sourceYaml,
  textHtmlBasic,
  textMd,
  textXml,
  textXmlSvg
]


export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStarryNight, {
      grammars,
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}
