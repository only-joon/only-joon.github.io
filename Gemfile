# frozen_string_literal: true

source "https://rubygems.org"

gemspec
# commenting below to remove dependency with "github-pages" 
# gem "github-pages", group: :jekyll_plugins

gem "jekyll-seo-tag"
gem "jekyll-sitemap"

# https://github.com/jekyll/jekyll/issues/8523#issuecomment-751409319
# When running locally, we run into the following error —
# `require': cannot load such file -- webrick (LoadError)
# adding this avoids it
gem "webrick"

# adding the following gems to support removal of "github-pages" dependency
gem "jemoji"
gem "kramdown-parser-gfm"
gem "jekyll-remote-theme"
gem "jekyll-feed", "~> 0.17.0"

gem "jekyll-gist", "~> 1.5"
gem "em-websocket", "~> 0.5.3"
gem "jekyll", "~> 4.2.0"
gem 'csv'