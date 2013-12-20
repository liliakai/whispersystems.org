.PHONY: install serve

install:
	bundle install

serve:
	bundle exec jekyll serve --watch
