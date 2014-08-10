PATH := ./node_modules/.bin:$(PATH)

all: dist

setup:
	export PATH=$(PATH); \
	bundle install; \
	npm install; \
	bower install; \
	bower-installer;
style.css:
	export PATH=$(PATH); \
	bundle exec sass app/scss/style.scss:app/css/style.css
build: style.css

watch:
	export PATH=$(PATH); \
	bundle exec sass app/scss/style.scss:app/css/style.css --watch
run:
	export PATH=$(PATH); \
	nwbuild -r -v 0.10.1 app/
dist: build
	export PATH=$(PATH); \
	grunt nodewebkit
distclean:
	git clean -dfx
