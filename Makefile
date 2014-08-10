all: dist

setup:
	bundle install
	npm install
	bower install
	bower-installer
style.css:
	bundle exec sass app/scss/style.scss:app/css/style.css
build: style.css

watch:
	bundle exec sass app/scss/style.scss:app/css/style.css --watch
run:
	nwbuild -r -v 0.10.1 app/
dist: build
	grunt nodewebkit
distclean:
	git clean -dfx
