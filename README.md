# Overview #

Because I'm a fan of the new Google UI seen in Gmail, Docs, Calendar, etc, I decided to reproduce
the look of these new UI elements for my own personal use.

## Compatibility ##

This is being tested in the latest versions of Chrome, Firefox, and IE8+.

Notes:
* If you popovers plugin, be sure to use the updated version found in `js/bootstrap-popovers.js`.
* To use Google-styled menus, include the google-select*.js files from the `js` directory. You can activate the styling via jquery by calling `$("select:not([multiple])").gSelect()`.


## Requirements ##

* [LESS](http://lesscss.org) - for compiling `.less` files into CSS
* [Twitter Bootstrap](http://github.com/twitter/bootstrap) - this will be automatically checked out, if necessary, during the build process


## Building ##

To build the CSS file, simply run `make` from the top-level directory. If necessary, Twitter Bootstrap will be automatically checked out.

The resulting CSS file will be found at `dist/google-bootstrap.css`.


## Demo ##

http://todc.github.com/css3-google-buttons/index.html


## License ##

Public domain: [http://unlicense.org](http://unlicense.org)


## Acknowledgements ##

Inspired by [Twitter Bootstrap](http://twitter.github.com/bootstrap/) and, of course, Google.