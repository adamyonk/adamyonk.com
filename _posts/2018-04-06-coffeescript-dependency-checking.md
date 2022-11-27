---
templateKey: "post"
title: CoffeeScript Dependency Checking
path: /coffeescript-dependency-checking
date: "2018-04-04T21:06:49.000Z"
author:
  name: Adam Jahnke
  picture: "https://secure.gravatar.com/avatar/95c4a6a54bb911712b9f153afff92f69?size=200"
tags: [coffeescript]
published: true
---

I just fixed an issue where a dependency (lodash) was leaking out as a global
in a CoffeeScript project. The solution to that was to use
[`_.noConflict`](https://lodash.com/docs/4.17.5#noConflict), but over the years
of this project's life, developers had started accidentally using lodash utils
without actually requiring lodash in the file.

Unfortunately, the `coffeelint` tool doesn't seem to have a `no-undef` rule
similar to eslint, so these sort of fell through the cracks. I came up with
this method to check our source code for missing requires:

```bash
$ ag '_[.( ]' coffee --files-with-matches | \
  xargs ag '(?s).*lodash.*' --files-without-matches
```

And for a bonus, just flip the matchers to check for files with extraneous
requires:

```bash
$ ag '_[.( ]' coffee --files-without-matches | \
  xargs ag '(?s).*lodash.*' --files-with-matches
```
