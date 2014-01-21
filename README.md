## Table of contents

 - [Overview](#overview)
 - [Quick start](#quick-start)
 - [Compatibility](#compatibility)
 - [Requirements](#requirements)
 - [Bugs and feature requests](#bugs-and-feature-requests)
 - [Documentation](#documentation)
 - [Compiling CSS and JavaScript](#compiling-css-and-javascript)
 - [Contributing](#contributing)
 - [Versioning](#versioning)
 - [Authors](#authors)
 - [Copyright and license](#copyright-and-license)
 - [Acknowledgements](#acknowledgements)


## Overview ##

This is a Google-styled theme for Bootstrap. Because I'm a fan of the new Google UI seen in Gmail, Docs, Calendar, etc, I decided to reproduce
the look of these new UI elements for my own personal use.

TODC Bootstrap was created by [Tim O'Donnell](https://github.com/todc), and maintained with the support and involvement of the community.

## Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/todc/todc-bootstrap/archive/v3.1.0-3.1.0.zip).
- Clone the repo: `git clone https://github.com/todc/todc-bootstrap.git`.
- Install with [Bower](http://bower.io): `bower install todc-bootstrap`.

Read the [Getting Started page](http://todc.github.io/todc-bootstrap/getting-started/) for information on the framework contents, templates and examples, and more.

## Compatibility ##

This is being tested in the latest versions of Chrome, Firefox, and IE8+.

The following projects are specifically designed for use with todc-bootstrap:

* [todc-select2](http://github.com/todc/todc-select2) - Google-themed select menus
* [todc-datepicker](http://github.com/todc/todc-datepicker) - Google-themed datepicker component

## Requirements ##

* [LESS](http://lesscss.org) - for compiling `.less` files into CSS
* [Bootstrap](http://github.com/twbs/bootstrap) - this will be automatically checked out, if necessary, during the build process



## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/todc/todc-bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/todc/todc-bootstrap/issues/new).


## Documentation

TODC Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://todc.github.io/todc-bootstrap/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v1.x).
  - **Windows users:** Read [this unofficial guide](https://github.com/juthilo/run-jekyll-on-windows/) to get Jekyll up and running without problems. We use Pygments for syntax highlighting, so make sure to read the sections on installing Python and Pygments.
2. From the root `/todc-bootstrap` directory, run `jekyll serve` in the command line.
  - **Windows users:** While we use Jekyll's `encoding` setting, you might still need to change the command prompt's character encoding ([code page](http://en.wikipedia.org/wiki/Windows_code_page)) to UTF-8 so Jekyll runs without errors. For Ruby 2.0.0, run `chcp 65001` first. For Ruby 1.9.3, you can alternatively do `SET LANG=en_EN.UTF-8`.
3. Open <http://localhost:9002> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <http://todc.github.io/todc-bootstrap/2.3.2/> while folks transition to TODC Bootstrap 3.

[Previous releases](https://github.com/todc/todc-bootstrap/releases) and their documentation are also available for download.



## Compiling CSS and JavaScript

Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root `/todc-bootstrap` directory, then run `npm install`. npm will look at [package.json](https://github.com/todc/todc-bootstrap/blob/master/package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Get Bootstrap - `grunt checkout-bootstrap`
`grunt checkout-bootstrap` - clones Bootstrap and checks out the version specified by the `bootstrapVersion` variable in Gruntfile.js.

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [Less](http://lesscss.org/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Compress/zip - `grunt compress`
Run `grunt compress` - compresses/zips the contents of the `/dist` folder to `todc-bootstrap-x.x.x-dist.zip` in the `/dist` folder.

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.



## Contributing

Please read through our [contributing guidelines](https://github.com/todc/todc-bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/todc/todc-bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.



## Versioning

TODC Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>-<major>.<minor>.<patch>`

The first set of `<major>.<minor>.<patch>` is the Bootstrap version while the second set is the todc-bootstrap version.

Given a version number MAJOR.MINOR.PATCH, increment the:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

For more information on SemVer, please visit <http://semver.org/>.



## Authors

**Tim O'Donnell**

- <http://github.com/todc>



## Copyright and license

Copyright 2011-2014 Tim O'Donnell. Code released under [the MIT license](http://www.opensource.org/licenses/mit-license.php). Docs released under [Creative Commons](docs/LICENSE).

**NOTE** This project was previously and incorrectly licensed under the Public Domain. It has now been changed to be compatible with Bootstrap's current license.



## Acknowledgements ##

Inspired by [Bootstrap](http://getbootstrap.com/) and, of course, Google.
