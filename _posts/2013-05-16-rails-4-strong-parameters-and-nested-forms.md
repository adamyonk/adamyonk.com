---
title: Rails 4, Strong Parameters, and Nested Forms
date: "2013-05-16T13:19:06-0500"
tags: [rails]
---

I recently started building a Rails 4 app and ran into some hangups when using strong parameters with nested models and forms. It seems to be lacking documentation for this specific scenario, so I wanted to share my findings.

In a scenario where you have an album that `has_many` songs, and you want to be able to edit both with the same form, you need to add every nested attribute that you plan to pass through to the `params.permit()`. This is the setup that ended up working for me:

```ruby
= form_for @album do |f|
  = f.text_field :title
  = f.fields_for :songs do |s|
    = s.text_field :name
  …
```

```ruby
class Album < ActiveRecord::Base
  has_many :songs
  accepts_nested_attributes_for :songs, allow_destroy: true
  …
end
```

```ruby
class AlbumsController < ApplicationController
  …
  private
  def album_params
    params.require(:album).permit(:title, songs_attributes: [:id, :_destroy, :name])
  end
end
```

```ruby
class Song < ActiveRecord::Base
  belongs_to :album
  …
end
```

Do you know of a better or easier way? [Let me know!][email]

[email]: mailto:EMAIL
