import markdownIt from 'markdown-it';
import esbuild from './_source/_utilities/esbuild.js';
import lightingcss from './_source/_utilities/lightningcss.js';
import except from './_source/_utilities/except.js';
import image from './_source/_utilities/image.js';
import tagUrl from './_source/_utilities/tagUrl.js';
import toSentence from './_source/_utilities/toSentence.js';
import style from './_source/_utilities/style.js';
import setVar from './_source/_utilities/setVar.js';
import fullDate from './_source/_utilities/fullDate.js';
import getRandom from './_source/_utilities/getRandom.js';
import markdownify from './_source/_utilities/markdownify.js';
import { IdAttributePlugin } from '@11ty/eleventy';
//import EleventyUnifiedPlugin from 'eleventy-plugin-unified';

export default async function (eleventyConfig) {
  /* --------------------------------------------------------------------------
  Plugins, bundles, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addBundle('css', { transforms: [style] });
  eleventyConfig.addShortcode('image', image);
  eleventyConfig.addPairedShortcode('setVar', setVar);
  eleventyConfig.addFilter('fullDate', fullDate);
  eleventyConfig.addFilter('getRandom', getRandom);
  eleventyConfig.addFilter('markdownify', markdownify);
  eleventyConfig.addFilter("except", except)
  eleventyConfig.addFilter("toSentence", toSentence)
  eleventyConfig.addFilter("tagUrl", tagUrl)
  eleventyConfig.addFilter("filterTags", function filterTags(values = []) { return values.filter(value => !["posts"].includes(value))})

  /* --------------------------------------------------------------------------
  MarkdownIt settings
  -------------------------------------------------------------------------- */
  const markdownItOptions = {
    html: true,
    linkify: true,
    typographer: true,
  };
  //eleventyConfig.setLibrary('md', markdownIt(markdownItOptions));
  //eleventyConfig.addPlugin(EleventyUnifiedPlugin, {
  //  htmlTransforms: [["@microflash/rehype-starry-night"]],
  //});

  /* --------------------------------------------------------------------------
  Files & folders
  -------------------------------------------------------------------------- */
  eleventyConfig.ignores.add('.DS_Store');
  eleventyConfig.setServerPassthroughCopyBehavior('passthrough');
  eleventyConfig.addPassthroughCopy('_source/assets/fonts');
  eleventyConfig.addPassthroughCopy('_source/assets/images');

  return {
    dir: {
      input: '_source',
      output: '_public',
      layouts: '_layouts',
      includes: '_includes',
    },
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
  };
}
