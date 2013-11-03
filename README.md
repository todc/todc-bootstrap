# Overview #

This is a Google-styled theme for Bootstrap. Because I'm a fan of the new Google UI seen in Gmail, Docs, Calendar, etc, I decided to reproduce
the look of these new UI elements for my own personal use.

## Compatibility ##

This is being tested in the latest versions of Chrome, Firefox, and IE8+.

The following projects are specifically designed for use with todc-bootstrap:

* [todc-select2](http://github.com/todc/todc-select2) - Google-themed select menus
* [todc-datepicker](http://github.com/todc/todc-datepicker) - Google-themed datepicker component

## Requirements ##

* [LESS](http://lesscss.org) - for compiling `.less` files into CSS
* [Bootstrap](http://github.com/twbs/bootstrap) - this will be automatically checked out, if necessary, during the build process



## Compiling CSS and JavaScript

Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/todc-bootstrap` directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Get Bootstrap - `grunt checkout-bootstrap`
`grunt checkout-bootstrap` - clones Bootstrap and checks out the version specified by the `bootstrapVersion` variable in Gruntfile.js.

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Compress/zip - `grunt compress`
Run `grunt compress` - compresses/zips the contents of the `/dist` folder to `todc-bootstrap-x.x.x-dist.zip` in the `/dist` folder.

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.



## Demo ##

http://todc.github.io/todc-bootstrap/index.html



## Versioning

TODC Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit <http://semver.org/>.



## License ##

MIT License - http://www.opensource.org/licenses/mit-license.php

**NOTE** This project was previously and incorrectly licensed under the Public Domain. It has now been changed to be compatible with Bootstrap's current license.



## Acknowledgements ##

Inspired by [Bootstrap](http://twbs.github.com/bootstrap/) and, of course, Google.
