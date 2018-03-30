---
templateKey: 'post'
title: CSS Map Pins
path: /css-map-pins
date: 2013-05-17 14:57:00 -0500
tags: [css]
---

I spend a fair amount of time trying to get this shape nailed down in CSS, so I wanted to share and save someone the time. The secret was in setting the second set of radii on the `box-shadow` property. [MDN][mdn] has a helpful visual to help wrap your mind around that lesser-known feature of box-shadow.

<a class="jsbin-embed" href="http://jsbin.com/bepoco/embed?output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.9"></script>

[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
