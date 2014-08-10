ofpg-html
=========

dependencies:

- ruby
- bundler (ruby gem)
- nodejs
- npm

environment setup:
------------------
``
make setup
``

- this will install:
- bower frontend package manager
- grunt nodejs task manager
- nodewebkit build files

prepare to run the application
------------------------------

build the scss files

``
make build
``

run the application
------------------

``
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

package the application
------------------------

``
make build
``
