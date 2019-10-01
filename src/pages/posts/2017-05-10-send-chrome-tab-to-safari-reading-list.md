---
templateKey: post
path: /chrome-to-safari-reading-list
title: Send Chrome tab to Safari Reading List
date: 2017-05-10T17:12:33.962Z
tags: [apple, macos, command-line]
published: true
---

- Since Chrome's "Bookmark All Tabs…" shortcut defaults to ⇧⌘D (the same as Safari's "Add to Reading List"), change it to something else: ![](/img/send-chrome-tab-to-safari-reading-list/1.png)
- Create a new Automator "Service": ![](/img/send-chrome-tab-to-safari-reading-list/2.png)
- Name it "Add to Safari Reading List" and add a "Run AppleScript" action with the following AppleScript, and don't forget to use "Google Chrome Canary" and or "Safari Technology Preview" instead if you prefer them:

  ```applescript
    tell application "Google Chrome"
      set pageUrl to get URL of active tab of first window
    end tell
    tell application "Safari" to add reading list item pageUrl
  ```

  ![](/img/send-chrome-tab-to-safari-reading-list/3.png)

- Enable the service and set the shortcut to ⇧⌘D: ![](/img/send-chrome-tab-to-safari-reading-list/4.png)
