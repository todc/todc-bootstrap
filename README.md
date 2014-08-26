## Table of contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Compatibility](#compatibility)
- [Requirements](#requirements)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)
- [Acknowledgements](#acknowledgements)


## Overview ##

This is a Google-styled theme for Bootstrap. Because I'm a fan of the new Google UI seen in Gmail, Docs, Calendar, etc, I decided to reproduce
the look of these new UI elements for my own personal use. The project's goal isn't UI parity with Google Apps -- it's feature parity with
Bootstrap, themed with Google's UI in mind.

TODC Bootstrap was created by [Tim O'Donnell](https://github.com/todc), and maintained with the support and involvement of the community.

## Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/todc/todc-bootstrap/archive/v3.2.0-3.3.0.zip).
- Clone the repo: `git clone https://github.com/todc/todc-bootstrap.git`.
- Install with [Bower](http://bower.io): `bower install todc-bootstrap`.

Read the [Getting started page](https://todc.github.io/todc-bootstrap/getting-started/) for information on the framework contents, templates and examples, and more.

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


## Documentation

TODC Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <https://todc.github.io/todc-bootstrap/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.3.x).
  - **Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. From the root `/todc-bootstrap` directory, run `jekyll serve` in the command line.
4. Open <http://localhost:9002> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v2.3.2 has been made available for the time being at <https://todc.github.io/todc-bootstrap/2.3.2/> while folks transition to TODC Bootstrap 3.

[Previous releases](https://github.com/todc/todc-bootstrap/releases) and their documentation are also available for download.



## Contributing

Please read through our [contributing guidelines](https://github.com/todc/todc-bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

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



## Creators

**Tim O'Donnell**

- <https://github.com/todc>



## Copyright and license

Copyright 2011-2014 Tim O'Donnell. Code released under [the MIT license](http://www.opensource.org/licenses/mit-license.php). Docs released under [Creative Commons](docs/LICENSE).

**NOTE** This project was previously and incorrectly licensed under the Public Domain. It has now been changed to be compatible with Bootstrap's current license.



## Acknowledgements ##

Inspired by [Bootstrap](http://getbootstrap.com/) and, of course, Google.
