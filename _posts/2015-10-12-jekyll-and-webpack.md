---
title: Jekyll and Webpack
date: "2015-10-12T09:30:00-0600"
tags: [javascript, webpack, jekyll]
---

I was recently setting up a Jekyll site that had the JavaScript and CSS compiled using Webpack. The compiled bundle should be parsed by Liquid, so it needed to somehow have the YAML triple-dashes prepended to it. Luckily, there is a Webpack plugin for just such an occasion! In `webpack.config.js`:

```javascript
var webpack = require("webpack");

module.exports = {
  plugins: [new webpack.BannerPlugin("---\n---\n\n", { raw: true })],
};
```

The `javascript±{ raw: true }` bit in the options is important, otherwise `BannerPlugin` will output the passed string as a comment and Liquid won't know about it.

When Jekyll picks up my built bundle to compile it into `/_site`, it will now have the triple-dashes prepended to the file. I use the `style-loader` with Webpack so that I can `require` styles in my JavaScript and have them written to the document `<head>`. So now I'll be able to use Liquid tags for things like this:

```scss
.site-header {
  background-image: url("{{ '/images/logo.jpg' | prepend: site.baseurl }}");
}
```

To read about the options for `BannerPlugin` and to see all of the available Webpack plugins, head over to the [List of Plugins][] page in the docs.

[list of plugins]: https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
