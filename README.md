## Table of contents

* [Overview](#overview)
* [Quick start](#quick-start)
* [Compatibility](#compatibility)
* [Requirements](#requirements)
* [Bugs and feature requests](#bugs-and-feature-requests)
* [Documentation](#documentation)
* [Contributing](#contributing)
* [Versioning](#versioning)
* [Creators](#creators)
* [Copyright and license](#copyright-and-license)
* [Acknowledgements](#acknowledgements)


## Overview ##

This is a Google-styled theme for Bootstrap. Because I'm a fan of the new Google UI seen in Gmail, Docs, Calendar, etc, I decided to reproduce
the look of these new UI elements for my own personal use. The project's goal isn't UI parity with Google Apps -- it's feature parity with
Bootstrap, themed with Google's UI in mind.

TODC Bootstrap was created by [Tim O'Donnell](https://github.com/todc), and maintained with the support and involvement of the community.


## Quick start

Several quick start options are available:

* [Download the latest release](https://github.com/todc/todc-bootstrap/archive/v3.3.6-3.3.6.zip).
* Clone the repo: `git clone https://github.com/todc/todc-bootstrap.git`.
* Install with [Bower](http://bower.io): `bower install todc-bootstrap`.
* Install with [Composer](https://getcomposer.org): `composer require todc/todc-bootstrap`.

**NOTE** - After cloning/installing todc-bootstrap you must run `grunt checkout-bootstrap` from the todc-bootstrap directory. This will download the correct version of the [Bootstrap](https://github.com/twbs/bootstrap) source.

Read the [Getting started page](https://todc.github.io/todc-bootstrap/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
todc-bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-theme.css
│   ├── bootstrap-theme.css.map
│   ├── bootstrap-theme.min.css
│   ├── bootstrap-theme.min.css.map
│   ├── todc-bootstrap.css
│   ├── todc-bootstrap.css.map
│   ├── todc-bootstrap.min.css
│   └── todc-bootstrap.min.css.map
├── js/
│   ├── bootstrap.js
│   └── bootstrap.min.js
├── fonts/
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   ├── glyphicons-halflings-regular.woff
│   └── glyphicons-halflings-regular.woff2
└── img/
    └── checkmark.png
```

We provide compiled CSS and JS (`bootstrap.*, todc-bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*, todc-bootstrap.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`bootstrap.*.map, todc-bootstrap.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons are included, as is the optional Bootstrap theme.


## Compatibility ##

This is being tested in the latest versions of Chrome, Firefox, and IE8+.

The following projects are specifically designed for use with todc-bootstrap:

* [todc-select2](https://github.com/todc/todc-select2) - Google-themed select menus
* [todc-datepicker](https://github.com/todc/todc-datepicker) - Google-themed datepicker component


## Requirements ##

* [LESS](http://lesscss.org) - for compiling `.less` files into CSS
* [Bootstrap](https://github.com/twbs/bootstrap) - this will be automatically checked out, if necessary, during the build process


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/todc/todc-bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/todc/todc-bootstrap/issues/new).

Note that **feature requests must target [TODC Bootstrap v4](https://github.com/todc/todc-bootstrap/tree/v4-dev),** because TODC Bootstrap v3 is now in maintenance mode and is closed off to new features. This is so that we can focus our efforts on TODC Bootstrap v4.

**NOTE:** The `v4-dev` branch is not yet available.


## Documentation

TODC Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <https://todc.github.io/todc-bootstrap/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v3.0.x).
  **Note for Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. From the root `/todc-bootstrap` directory, run `jekyll serve` in the command line.
4. Open <http://localhost:9002> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <https://todc.github.io/todc-bootstrap/2.3.2/> while folks transition to TODC Bootstrap 3.

[Previous releases](https://github.com/todc/todc-bootstrap/releases) and their documentation are also available for download.


## Contributing

We welcome contributions from *everyone*. While contributing, please follow the project [code of conduct](https://github.com/todc/todc-bootstrap/blob/master/CODE_OF_CONDUCT.md), so that everyone can be included.

Please read through our [contributing guidelines](https://github.com/todc/todc-bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

**TODC Bootstrap v3 is now closed off to new features.** It has gone into maintenance mode so that we can focus our efforts on [TODC Bootstrap v4](https://github.com/todc/todc-bootstrap/tree/v4-dev), the future of the theme. Pull requests which add new features (rather than fix bugs) should target [TODC Bootstrap v4 (the `v4-dev` git branch)](https://github.com/todc/todc-bootstrap/tree/v4-dev) instead.

Editor preferences are available in the [editor config](https://github.com/todc/todc-bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

**NOTE:** The `v4-dev` branch is not yet available.


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

See [the Releases section of our GitHub project](https://github.com/todc/todc-bootstrap/releases) for changelogs for each release version of TODC Bootstrap.


## Creators

**Tim O'Donnell**

* <https://github.com/todc>


## Copyright and license

Copyright 2011-2016 Tim O'Donnell. Code released under [the MIT license](https://github.com/todc/todc-bootstrap/blob/master/LICENSE). Docs released under [Creative Commons Attribution 3.0 Unported](https://github.com/todc/todc-bootstrap/blob/master/docs/LICENSE).

**NOTE** This project was previously and incorrectly licensed under the Public Domain. It has now been changed to be compatible with Bootstrap's current license.


## Acknowledgements ##

Inspired by [Bootstrap](http://getbootstrap.com/) and, of course, Google.
