---
title: Send Chrome tab to Safari Reading List
date: "2017-05-10T17:12:33.962Z"
author:
  name: Adam Jahnke
  picture: "https://secure.gravatar.com/avatar/95c4a6a54bb911712b9f153afff92f69?size=200"
tags: [apple, macos, command-line]
published: true
---

- Since Chrome's "Bookmark All Tabs…" shortcut defaults to ⇧⌘D (the same as Safari's "Add to Reading List"), change it to something else: ![](/assets/blog/send-chrome-tab-to-safari-reading-list/1.png)
- Create a new Automator "Service": ![](/assets/blog/send-chrome-tab-to-safari-reading-list/2.png)
- Name it "Add to Safari Reading List" and add a "Run AppleScript" action with the following AppleScript, and don't forget to use "Google Chrome Canary" and or "Safari Technology Preview" instead if you prefer them:

  ```applescript
    tell application "Google Chrome"
      set pageUrl to get URL of active tab of first window
    end tell
    tell application "Safari" to add reading list item pageUrl
  ```

  ![](/assets/blog/send-chrome-tab-to-safari-reading-list/3.png)

- Enable the service and set the shortcut to ⇧⌘D: ![](/assets/blog/send-chrome-tab-to-safari-reading-list/4.png)
