import markdownIt from "markdown-it";
import esbuild from "./_source/_utilities/esbuild.js";
import lightingcss from "./_source/_utilities/lightningcss.js";
import except from "./_source/_utilities/except.js";
import image from "./_source/_utilities/image.js";
import tagUrl from "./_source/_utilities/tagUrl.js";
import toSentence from "./_source/_utilities/toSentence.js";
import style from "./_source/_utilities/style.js";
import setVar from "./_source/_utilities/setVar.js";
import fullDate from "./_source/_utilities/fullDate.js";
import getRandom from "./_source/_utilities/getRandom.js";
import markdownify from "./_source/_utilities/markdownify.js";
import { EleventyI18nPlugin, IdAttributePlugin } from "@11ty/eleventy";
import pluginWebc from "@11ty/eleventy-plugin-webc";
//import EleventyUnifiedPlugin from 'eleventy-plugin-unified';
import get from "lodash/get.js";

export default async function (eleventyConfig) {
    const translations = {
      hello: {
        "en-US": "Hello",
        "es-ES": "Hola",
      },
      also_available_in: {
        "en-US": "This page is also available in:",
        "es-ES": "Esta página también está disponible en:",
      },
    };
  eleventyConfig.addFilter("i18n", function (key, locale) {
    // If no locale is provided, use page locale or default
    locale = locale || this.page?.lang || "en";
    const tx = get(translations, key);
    const value = tx[locale];
    return value;
  });
  /* --------------------------------------------------------------------------
  Plugins, bundles, shortcodes, filters
  -------------------------------------------------------------------------- */
  eleventyConfig.addPlugin(esbuild);
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en-US",
    errorMode: "allow-fallback",
    fallbackLocales: {
      "*": "en-US",
    },
  });
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(lightingcss);
  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addBundle("css", { transforms: [style] });
  eleventyConfig.addShortcode("image", image);
  eleventyConfig.addPairedShortcode("setVar", setVar);
  eleventyConfig.addFilter("fullDate", fullDate);
  eleventyConfig.addFilter("getRandom", getRandom);
  eleventyConfig.addFilter("markdownify", markdownify);
  eleventyConfig.addFilter("except", except);
  eleventyConfig.addFilter("toSentence", toSentence);
  eleventyConfig.addFilter("tagUrl", tagUrl);
  eleventyConfig.addFilter("filterTags", function filterTags(values = []) {
    return values.filter((value) => !["posts"].includes(value));
  });
  eleventyConfig.addFilter("published", function filterPublished(posts = []) {
    return posts.filter((post) => post.data.published !== false);
  });

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
  eleventyConfig.ignores.add(".DS_Store");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("_source/assets/fonts");
  eleventyConfig.addPassthroughCopy("_source/assets/images");

  return {
    dir: {
      input: "_source",
      output: "_public",
      layouts: "_layouts",
      includes: "_includes",
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
  };
}
