#!/usr/bin/env node

/*!
 * Script to build our plugins to use them separately.
 * Copyright 2020 The Bootstrap Authors
 * Copyright 2020 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

'use strict'

const path = require('path')
const rollup = require('rollup')
const { babel } = require('@rollup/plugin-babel')
const banner = require('./banner.js')

const plugins = [
  babel({
    // Only transpile our source code
    exclude: 'node_modules/**',
    // Inline the required helpers in each file
    babelHelpers: 'inline'
  })
]
const bsPlugins = {
  Data: path.resolve(__dirname, '../bootstrap/js/src/dom/data.js'),
  EventHandler: path.resolve(__dirname, '../bootstrap/js/src/dom/event-handler.js'),
  Manipulator: path.resolve(__dirname, '../bootstrap/js/src/dom/manipulator.js'),
  Polyfill: path.resolve(__dirname, '../bootstrap/js/src/dom/polyfill.js'),
  SelectorEngine: path.resolve(__dirname, '../bootstrap/js/src/dom/selector-engine.js'),
  Alert: path.resolve(__dirname, '../bootstrap/js/src/alert.js'),
  Button: path.resolve(__dirname, '../bootstrap/js/src/button.js'),
  Carousel: path.resolve(__dirname, '../bootstrap/js/src/carousel.js'),
  Collapse: path.resolve(__dirname, '../bootstrap/js/src/collapse.js'),
  Dropdown: path.resolve(__dirname, '../bootstrap/js/src/dropdown.js'),
  Modal: path.resolve(__dirname, '../bootstrap/js/src/modal.js'),
  Popover: path.resolve(__dirname, '../bootstrap/js/src/popover.js'),
  ScrollSpy: path.resolve(__dirname, '../bootstrap/js/src/scrollspy.js'),
  Tab: path.resolve(__dirname, '../bootstrap/js/src/tab.js'),
  Toast: path.resolve(__dirname, '../bootstrap/js/src/toast.js'),
  Tooltip: path.resolve(__dirname, '../bootstrap/js/src/tooltip.js')
}
const rootPath = path.resolve(__dirname, '../js/dist/')

const defaultPluginConfig = {
  external: [
    bsPlugins.Data,
    bsPlugins.EventHandler,
    bsPlugins.SelectorEngine
  ],
  globals: {
    [bsPlugins.Data]: 'Data',
    [bsPlugins.EventHandler]: 'EventHandler',
    [bsPlugins.SelectorEngine]: 'SelectorEngine'
  }
}

const getConfigByPluginKey = pluginKey => {
  if (
    pluginKey === 'Data' ||
    pluginKey === 'Manipulator' ||
    pluginKey === 'EventHandler' ||
    pluginKey === 'Polyfill' ||
    pluginKey === 'SelectorEngine' ||
    pluginKey === 'Util' ||
    pluginKey === 'Sanitizer'
  ) {
    return {
      external: [bsPlugins.Polyfill],
      globals: {
        [bsPlugins.Polyfill]: 'Polyfill'
      }
    }
  }

  if (pluginKey === 'Alert' || pluginKey === 'Tab') {
    return defaultPluginConfig
  }

  if (
    pluginKey === 'Button' ||
    pluginKey === 'Carousel' ||
    pluginKey === 'Collapse' ||
    pluginKey === 'Modal' ||
    pluginKey === 'ScrollSpy'
  ) {
    const config = Object.assign(defaultPluginConfig)
    config.external.push(bsPlugins.Manipulator)
    config.globals[bsPlugins.Manipulator] = 'Manipulator'
    return config
  }

  if (pluginKey === 'Dropdown' || pluginKey === 'Tooltip') {
    const config = Object.assign(defaultPluginConfig)
    config.external.push(bsPlugins.Manipulator, 'popper.js')
    config.globals[bsPlugins.Manipulator] = 'Manipulator'
    config.globals['popper.js'] = 'Popper'
    return config
  }

  if (pluginKey === 'Popover') {
    return {
      external: [
        bsPlugins.Data,
        bsPlugins.SelectorEngine,
        bsPlugins.Tooltip
      ],
      globals: {
        [bsPlugins.Data]: 'Data',
        [bsPlugins.SelectorEngine]: 'SelectorEngine',
        [bsPlugins.Tooltip]: 'Tooltip'
      }
    }
  }

  if (pluginKey === 'Toast') {
    return {
      external: [
        bsPlugins.Data,
        bsPlugins.EventHandler,
        bsPlugins.Manipulator
      ],
      globals: {
        [bsPlugins.Data]: 'Data',
        [bsPlugins.EventHandler]: 'EventHandler',
        [bsPlugins.Manipulator]: 'Manipulator'
      }
    }
  }
}

const utilObjects = [
  'Util',
  'Sanitizer'
]

const domObjects = [
  'Data',
  'EventHandler',
  'Manipulator',
  'Polyfill',
  'SelectorEngine'
]

const build = async plugin => {
  console.log(`Building ${plugin} plugin...`)

  const { external, globals } = getConfigByPluginKey(plugin)
  const pluginFilename = path.basename(bsPlugins[plugin])
  let pluginPath = rootPath

  if (utilObjects.includes(plugin)) {
    pluginPath = `${rootPath}/util/`
  }

  if (domObjects.includes(plugin)) {
    pluginPath = `${rootPath}/dom/`
  }

  const bundle = await rollup.rollup({
    input: bsPlugins[plugin],
    plugins,
    external
  })

  await bundle.write({
    banner: banner(pluginFilename),
    format: 'umd',
    name: plugin,
    sourcemap: true,
    globals,
    file: path.resolve(__dirname, `${pluginPath}/${pluginFilename}`)
  })

  console.log(`Building ${plugin} plugin... Done!`)
}

const main = async () => {
  try {
    await Promise.all(Object.keys(bsPlugins).map(plugin => build(plugin)))
  } catch (error) {
    console.error(error)

    process.exit(1)
  }
}

main()
