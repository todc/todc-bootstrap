#!/usr/bin/env node

"use strict"

/*!
 * Script to clone and checkout Bootstrap.
 * Copyright 2017 The TODC Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/* global Set */
var path = require("path")
var git = require("nodegit")
var fse = require("fs-extra")
var newLine = "\n"
var bootstrapDir = path.resolve("./bootstrap")
var bootstrapGit = "https://github.com/twbs/bootstrap.git"
// var bootstrapVersion = "refs/tags/v4.0.0-beta"
var bootstrapVersion = "v4-dev"

var checkoutBranch = function (repository) {
  return repository.getReference(bootstrapVersion)
    .then(function (reference) {
      console.log("Checking out: " + reference.name())
      return repository.checkoutRef(reference)
    })
}

console.log("Removing directory " + bootstrapDir + "...")

fse.remove(bootstrapDir).then(function () {
  console.log("Removed " + bootstrapDir + newLine)
  console.log("Cloning " + bootstrapGit + " to " + bootstrapDir + "...")

  git.Clone(bootstrapGit, bootstrapDir).then(function (repository) {
    // Checkout `bootstrapVersion` from `bootstrapDir`
    git.Repository.open(bootstrapDir)
      .then(checkoutBranch)
      .catch(err => {
        console.log("Checkout Error:")
        console.error(err)
      })
      .done(function () {
        console.log("Finished checking out " + bootstrapVersion)
      })
  })
  .catch(err => {
    console.log("Cloning Error:")
    console.error(err)
  })
  .done(function () {
    console.log("Completed cloning " + bootstrapGit + newLine)
  })
})
.catch(err => {
  console.error(err)
})
