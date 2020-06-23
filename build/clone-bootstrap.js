#!/usr/bin/env node

'use strict'

/*!
 * Script to clone and checkout Bootstrap.
 * Copyright 2011-2020 The TODC Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

/* global Set */
const path = require('path')
const git = require('nodegit')
const fse = require('fs-extra')
const newLine = '\n'
const bootstrapDir = path.resolve('./bootstrap')
const bootstrapGit = 'https://github.com/twbs/bootstrap.git'
// const bootstrapVersion = 'refs/tags/v4.0.0'
const bootstrapVersion = 'main'

const checkoutBranch = function (repository) {
  return repository.getReference(bootstrapVersion)
    .then((reference) => {
      console.log(`Checking out: ${reference.name()}`)
      return repository.checkoutRef(reference)
    })
}

console.log(`Removing directory ${bootstrapDir} ${'...'}`)

fse.remove(bootstrapDir).then(() => {
  console.log(`Removed ${bootstrapDir} ${newLine}`)
  console.log(`Cloning ${bootstrapGit} ${'to'} ${bootstrapDir} ${'...'}`)

  git.Clone(bootstrapGit, bootstrapDir).then(() => {
    // Checkout `bootstrapVersion` from `bootstrapDir`
    git.Repository.open(bootstrapDir)
      .then(checkoutBranch)
      .catch((err) => {
        console.log('Checkout Error:')
        console.error(err)
      })
      .done(() => {
        console.log(`Finished checking out ${bootstrapVersion}`)
      })
  })
    .catch((err) => {
      console.log('Cloning Error:')
      console.error(err)
    })
    .done(() => {
      console.log(`Completed cloning ${bootstrapGit} ${newLine}`)
    })
})
  .catch((err) => {
    console.error(err)
  })
