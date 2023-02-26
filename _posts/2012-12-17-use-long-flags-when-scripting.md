---
title: Use long flags when scripting
date: "2012-12-17T10:32:59-0600"
author:
  name: Adam Jahnke
  picture: "https://secure.gravatar.com/avatar/95c4a6a54bb911712b9f153afff92f69?size=200"
tags: [command-line, programming]
published: true
---

I peruse a fair amount of dotfile repos, and keep seeing people use short flags for things like aliases and inside little command line tools. Short flags are a command line shortcut, and they do belong there, but if you're not writing the command in a prompt, do yourself (and anyone else that may someday be reading your code) a favor and be more verbose, because this:

```bash
curl --silent checkip.dyndns.org | grep --extended-regexp --only-matching '[0-9\.]+'
```

is a lot easier for a human to understand than this:

```bash
curl -s checkip.dyndns.org | grep -Eo '[0-9\.]+'
```
