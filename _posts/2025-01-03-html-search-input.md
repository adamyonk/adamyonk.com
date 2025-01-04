---
title: "Clear Event for HTML Search Input"
date: "2025-01-03T05:35:07.322Z"
tags: [javascript]
---

Well, I guess it's fitting that my first post back be ECMAScript weirdness.

If you're not familiar, this is a search-type input element:

```html
<input type=search value="some value" />
```

<input type=search value="some value" />

Notice the little "X" button to the right, it's for clearing the input value! If you were thinking there would be an
event that fires when you click that button, my god, would you be wrong.

You _can_ listen for an `input` event, but there's no way of differentiating between when someone just deletes all the
contents of the input or when they click the clear button:

```html
<input type=search onInput="alert(`The new value is [${this.value}].`)" />
```

<input type=search value="some value" onInput="alert(`The new value is [${this.value}].`)" />

So. We're left to surmise for ourselves what is going on.

```html
<input type=search onClick="if (this.value) { setTimeout(() => { if (!this.value) { console.log("CLEARED") } }, 0) }" />
```
