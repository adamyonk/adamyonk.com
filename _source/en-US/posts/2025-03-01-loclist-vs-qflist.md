---
title: "loclist vs qflist"
date: "2025-03-01T05:35:07.322Z"
tags: [vim, til]
---

A workflow I find myself quite often when I’m searching a project:

- Fuzzy search for something
- Make a selection from the results
- Open the selection in a quickfix list
- Investigate each item in the list

Every once in a while I would open a new tab and want to do two different searches in the same session, but quickfix gave me an unhappy surprise when I would switch back to the first tab - the quickfix list would show my second result set with the first lost to the ether! Quickfix list is “session-local”, meaning it will show the same thing when opened anywhere in that vim session. 

Vim aficionados probably know where this is headed, but I recently discovered the loclist, what I actually wanted for this case. From the docs:
> A location list is a window-local quickfix list. You get one after commands like :lvimgrep, :lgrep, :lhelpgrep, :lmake, etc., which create a location list instead of a quickfix list as the corresponding :vimgrep, :grep, :helpgrep, :make do.
