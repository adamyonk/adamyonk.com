---
templateKey: 'post'
title: Rails + webpack - webpacker
path: /rails-webpack-webpacker
date: 2018-04-04T21:06:49.000Z
published: true
tags: [webpack, javascript, rails]
---

Rails is great, webpack is great, abstractions are not always great.

I'm going to start this from a pretty vanilla Rails 5 setup, I started with `rails new webpacked --webpack`.

Also, for this to work, you'll need webpack > 4.3.0.

## Remove the webpacker things

Remove `sass-rails`, `uglifier`, `coffee-rails`, `turbolinks`, `webpacker` from Gemfile.

Remove `config.webpacker.check_yarn_integrity` settings in config/envronments.

Change `javascript_pack_tag` and `stylesheet_pack_tag` to `javascript_include_tag` and `stylesheet_link_tag`.

Then:

```bash
$ rm -r bin/webpack config/webpack* public/packs
$ bundle
$ yarn uninstall @rails/webpacker webpack-dev-server
```

## Disable sprockets

```ruby{4}
# config/environments/development.rb
Rails.application.configure do
  …
  config.assets.compile = false
  …
end
```

## Install dependencies

```bash
$ mkdir public/assets
$ touch public/assets/.keep
$ yarn add --dev webpack webpack-{cli,dev-server}
```

Check `/public/assets` into git, then Add `/public/assets` to your `.gitignore`. This is where we're going to build assets to for production.

## Add build scripts

```json{5-8}
// package.json
{
  "name": "webpacked",
  "private": true,
  "scripts": {
    "server": "webpack-dev-server",
    "precompile": "rm -r public/assets/* && NODE_ENV=production webpack"
  },
  "dependencies": {},
  "devDependencies": {
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.13",
    "webpack-dev-server": "^3.1.1"
  }
}
```

## Add a simple webpack config

```javascript
// webpack.config.js
const DIR = require("path").resolve(__dirname)
const PROD = process.env.NODE_ENV === "production"

module.exports = {
  entry: {
    application: `${DIR}/app/assets/javascripts/application.js`,
  },
  mode: PROD ? "production" : "development",
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    path: `${DIR}public/assets/`,
  },
  resolve: {
    extensions: [".js", ".json", ".css"],
    modules: ["node_modules", `${DIR}/app/assets`],
  },
}
```

Now start the wepback dev server:

```bash
$ yarn server
ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wdm｣: Hash: ee01dba8920628636a4e
ℹ ｢wdm｣: Compiled successfully.
```

Go to http://localhost:8080/application.js and you should be able to see the compiled webpack bundle.

## Compile CSS

Add the necessary webpack loaders:

```bash
$ yarn add -D {file,extract,css,postcss}-loader cssnano
```

And then set up a rule for them:

```javascript{4-31}
// webpack.config.js
module.exports = {
  …
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].css",
            },
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("cssnano")({
                  discardComments: { removeAll: true },
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  …
};
```

Now, in your JavaScript files, you can require stylesheets like so:

```javascript{2}
// app/assets/javascripts/application.js
require("stylesheets/application.css");

console.log("Hello from application.js!");
```

## Tell Rails where to find assets from webpack-dev-server

Now if you load up your site, you're probably seeing something like:
`Sprockets::Rails::Helper::AssetNotFound in Welcome#index`

Add this helper to `app/helpers/application_helper.rb`:

```ruby{3-5}
# app/helpers/application_helper.rb
module ApplicationHelper
  def webpack_asset_url(name)
    "http://localhost:8080/#{name}"
  end
end
```

Then wrap the paths of any assets you're including in that helper, and don't forget the extensions:

```html{8-9}
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title>Webpacked</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag webpack_asset_url('application.css'), media: 'all' %>
    <%= javascript_include_tag webpack_asset_url('application.js') %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```

## Building for production

But wait, production! We need to tell Rails to serve the static assets in production:

```ruby{4-8}
# app/helpers/application_helper.rb
module ApplicationHelper
  def webpack_asset_url(name)
    if Rails.env.production?
      "/assets/#{name}"
    else
      "http://localhost:8080/#{name}"
    end
  end
end
```

You can test this by precompiling the assets and then restarting your Rails server in production mode:

```bash
$ yarn precompile && \
  RAILS_ENV=production \
  RAILS_SERVE_STATIC_FILES=true \
  SECRET_KEY_BASE=hi \
  bin/rails server
```

## Fingerprinting assets

But wait, asset fingerprinting! Change the output filename for CSS and entrypoints:

```javascript{12,33-35}
// webpack.config.js
module.exports = {
  …
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: PROD ? "[name]-[hash].css" : "[name].css",
            },
          },
          { loader: "extract-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: loader => [
                require("cssnano")({
                  discardComments: { removeAll: true },
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  output: {
    chunkFilename: PROD ? "[name]-[contenthash].js" : "[name].js",
    filename: PROD ? "[name]-[contenthash].js" : "[name].js",
    hashDigestLength: 32,
    path: `${DIR}public/assets/`,
  },
  …
}
```

Now we need to tell Rails about these hashes somehow. First, we'll add the webpack-manifest-plugin (when building for production) to output a JSON map of the names of chunks to their hashed names:

```javascript{4-6}
// webpack.config.js
module.exports = {
  …
  plugins: [
    PROD && new (require("webpack-manifest-plugin"))()
  ].filter(Boolean),
  …
};
```

If you `yarn precompile` again, you should see it output a file like this, in addition to the other chunks:

```json
// public/assets/manifest.json
{
  "application.css": "application-4cf6c42fe4e9a27ee5a758dcf37091f7.css",
  "application.js": "application-5689a742f9b3cb6758a6b35164a98ade.js"
}
```

Now let's update the Rails helper to get everything sorted out:

```ruby{5,11-18}
# app/helpers/application_helper.rb
module ApplicationHelper
  def webpack_asset_url(name)
    if Rails.env.production?
      "/assets/#{webpack_fingerprint_for(name)}"
    else
      "http://localhost:8080/#{name}"
    end
  end

  def webpack_fingerprint_for(name)
    @chunk_manifest ||= JSON.parse(File.read('public/assets/manifest.json'))
    if @chunk_manifest[name].nil?
      logger.error "chunk_manifest_missing name=#{name}"
      logger.error @chunk_manifest.inspect
    end
    @chunk_manifest[name]
  end
end
```

You might have to restart the Rails server again, but now you should see it loading the fingerprinted assets! Now wherever you run `rake assets:precompile` during your deployment process, replace it with `yarn precompile`.

## Separate the webpack runtime

For better caching, it's smart to separate the webpack runtime from your application's JavaScript:

```javascript{4-6}
// webpack.config.js
module.exports = {
  …
  optimization: {
    runtimeChunk: "single",
  },
  …
};
```

Then just include that `runtime` chunk before any other JavaScript:

```html{9}
<!-- app/views/layouts/application.html.erb -->
<!DOCTYPE html>
<html>
  <head>
    <title>Webpacked</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag webpack_asset_url('application.css'), media: 'all' %>
    <%= javascript_include_tag webpack_asset_url('runtime.js') %>
    <%= javascript_include_tag webpack_asset_url('application.js') %>
  </head>

  <body>
    <%= yield %>
  </body>
</html>
```
