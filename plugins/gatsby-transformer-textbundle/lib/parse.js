"use strict";

const fs = require("fs");

const {
  xml2json
} = require("xml-js");

const {
  format,
  promisify
} = require("util");

const readFile = promisify(fs.readFile);
const readdir = promisify(fs.readdir);

const grayMatter = require("gray-matter");

const checkElForProps = (el, props = []) => {
  return props.reduce((a, p) => {
    try {
      a[p] = el.elements.find(el => el.attributes.identifier.toLowerCase() === p).elements[0].text;
    } catch (e) {
      false;
    }

    return a;
  }, {});
};

const findReplacementNodes = xml => {
  const json = JSON.parse(xml2json(xml));
  const content = json.elements[0].elements[1].elements.filter(e => e.elements);
  const replacements = [];

  const recurse = array => {
    array.forEach(el => {
      let kind;

      try {
        kind = el.attributes.kind;
      } catch (e) {
        false;
      }

      if (kind === "image") {
        const data = checkElForProps(el, ["image", "url", "title", "description"]);
        replacements.push({
          type: "image",
          ...data
        });
        return;
      }

      if (kind === "link") {
        const data = checkElForProps(el, ["url", "title"]);
        replacements.push({
          type: "link",
          ...data
        });
        replacements.push({
          type: "linkEnd",
          ...data
        });
      }

      if (el.elements) {
        recurse(el.elements);
      }
    });
  };

  recurse(content);
  return replacements;
};

const mapNodesToHtml = replacements => {
  return replacements.map(r => {
    if (r.type === "image") {
      let el = "";
      el += `![${r.description ? r.description : ""}](${r.image ? r.image : ""}${r.title ? ` "${r.title}"` : ""})`;
      r.url && (el = `[${el}](${r.url})`);
      return el;
    }

    if (r.type === "link") {
      return `[`; // return `<a${r.url ? ` href="${r.url}"` : ""}${
      //   r.title ? ` title="${r.title}"` : ""
      // }>`
    }

    if (r.type === "linkEnd") {
      return `](${r.url ? r.url : ""}${r.title ? ` "${r.title}"` : ""})`;
    }

    return r;
  });
};

const parseMd = (md, replacements) => {
  const formatted = format(md.replace(/￼/g, "%s"), ...replacements);
  return grayMatter(formatted);
};

const parse = async file => {
  const xml = await readFile(`${file}/Content.xml`, "utf-8");
  const md = await readFile(`${file}/Text.txt`, "utf-8");
  let replacements = findReplacementNodes(xml);

  if (replacements.some(r => r.type === "image")) {
    const assets = await readdir(`${file}/Media`);
    replacements = replacements.map(r => {
      if (r.type === "image") {
        r.image = `./Media/${assets.find(a => a.match(r.image))}`;
      }

      return r;
    });
  }

  replacements = mapNodesToHtml(replacements);
  return parseMd(md, replacements);
};

exports.parse = parse;