---
title: GitHub Merge Button from CLI
author:
  name: Adam Jahnke
  picture: "https://secure.gravatar.com/avatar/95c4a6a54bb911712b9f153afff92f69?size=200"
date: "2016-03-08T12:42:39-0600"
tags: [command-line, github]
published: true
---

It's no fun to have to clean up git history after a botched command line merge of a GitHub pull request. I love to live life in the shell, and I don't want to open a new browser tab just to click [The Merge Button][], so sometimes I'm stubborn and I don't. And sometimes I waste a lot of time cleaning up the mess that happens when I try to do all of that with an outdated master branch.

With some prodding and direction from my good friend [pengwynn][], I put together a script based on the new-to-me [Merge Button API Route][]. So, go forth and merge with glee, in safety, and without leaving our beloved shell. ❤️

See `git-merge-pr` below or [grab it from my dotfiles][git-merge-pr]!

[the merge button]: https://github.com/blog/843-the-merge-button
[pengwynn]: https://github.com/pengwynn
[merge button api route]: https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button
[git-merge-pr]: https://github.com/adamyonk/dotfiles/blob/master/bin/git-merge-pr

## git-merge-pr

```bash
#!/usr/bin/env bash

# Contributors:
#   Adam Jahnke - http://github.com/adamyonk
#   Wynn Netherland - http://github.com/pengwynn

#/
#/ Usage:
#/   git merge-pr [<branch>|<pr>]
#/
#/ Looks up the most recent pull requst based on <branch>, <pr>, or the current
#/ branch, and tries to merge it using the merge API (like the Merge Button).
#/
#/ Requirements:
#/   - $GITHUB_TOKEN environment variable
#/   - jq https://stedolan.github.io/jq/
#/

set -e

if [[ "$1" == "--help" || "$1" == '-h' ]]; then
  grep ^#/ "$0" | cut -c4-
  exit
fi

if [[ -z "$GITHUB_TOKEN" ]]; then
  echo "Please export \$GITHUB_TOKEN"
  exit 1
fi

if [[ -z "$(which jq)" ]]; then
  echo "Please install jq: https://stedolan.github.io/jq/"
  exit 1
fi

remote_url=$(git config --get remote.origin.url)
owner_repo=$(echo $remote_url | sed -En 's_^(git@|https://)?github.com(:|/)(.*)/(.*)(.git)?_\3 \4_p')
owner=$(echo $owner_repo | sed 's_ .*__')
repo=$(echo $owner_repo | sed 's_.* __; s_.git$__')
branch=${1:-"$(git symbolic-ref HEAD | sed 's_refs/heads/__')"}
endpoint="https://api.github.com/repos/$owner/$repo/pulls"
auth="Authorization: token $GITHUB_TOKEN"

# Check if $1 is actually a pull request number
if $(test ! -z $1 && echo $1 | grep --silent '^\d*$'); then
  pull=$1
else
  # Get the first matching pull request for $branch
  # https://developer.github.com/v3/pulls/#list-pull-requests
  pull=$(curl --silent --header "$auth"\
    "$endpoint?head=$owner:$branch"\
    | jq '.[0].number')
fi

# Try to merge
# https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button
if [[ "$pull" != "null" ]]; then
  response=$(curl --silent --request PUT --data "{}" --header "$auth"\
    "$endpoint/$pull/merge"\
    | jq '.message'\
    | sed 's_"__g')

  if ! [[ "$response" =~ "success" ]]; then
    response="$response\nhttps://github.com/$owner/$repo/pull/$pull"
  fi
else
  response="Couldn't find an open pull request based on $branch."
fi

echo -e "\n$response"
```
