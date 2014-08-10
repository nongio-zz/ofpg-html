ofpg-html
=========

dependencies:

- ruby
- bundler (ruby gem)
- nodejs
- npm

** environment setup: **

``shell
make setup
``

- this will install:
- bower frontend package manager
- grunt nodejs task manager
- nodewebkit build files

** prepare to run **

build the scss files

``shell
make build
``
run

``shell
make run
``
to enable the developer tools in nodewebkit change the app/package.json file like this:
``json
{
  "window": {
    "toolbar": true,
  }
}
``

** package the application **

``shell
make build
``
