---
templateKey: 'post'
title: CSS Map Pins
path: /css-map-pins
date: 2013-05-17 14:57:00 -0500
tags: [css]
---

I spend a fair amount of time trying to get this shape nailed down in CSS, so I wanted to share and save someone the time. The secret was in setting the second set of radii on the `box-shadow` property. [MDN][mdn] has a helpful visual to help wrap your mind around that lesser-known feature of box-shadow.

<iframe src="https://codesandbox.io/embed/k9162mxoqv?autoresize=1&hidenavigation=1&module=%2Findex.html" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
