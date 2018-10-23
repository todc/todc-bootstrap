// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(function () {
  'use strict'

  if (!window.docsearch) {
    return
  }

  var inputElement = document.getElementById('search-input')
  var siteDocsVersion = inputElement.getAttribute('data-docs-version')

  function getOrigin() {
    var location = window.location
    var origin = location.origin

    if (!origin) {
      var port = location.port ? ':' + location.port : ''

      origin = location.protocol + '//' + location.hostname + port
    }

    return origin
  }

  window.docsearch({
    apiKey: 'e733f93dbde231dec8e69a6c7f5ae8ac',
    indexName: 'todc-bootstrap',
    inputSelector: '#search-input',
    algoliaOptions: {
      facetFilters: ['version:' + siteDocsVersion]
    },
    handleSelected: function (input, event, suggestion) {
      var url = suggestion.url
      url = suggestion.isLvl1 ? url.split('#')[0] : url
      // If it's a title we remove the anchor so it does not jump.
      window.location.href = url
    },
    transformData: function (hits) {
      return hits.map(function (hit) {
        var siteurl = getOrigin()
        var urlRE = /^https?:\/\/todc\.github\.io\/todc-bootstrap/

        // When in production, return the result as is,
        // otherwise remove our url from it.
        hit.url = siteurl.match(urlRE) ? hit.url : hit.url.replace(urlRE, '')

        return hit
      })
    },
    debug: false // Set debug to true if you want to inspect the dropdown
  })
}())
