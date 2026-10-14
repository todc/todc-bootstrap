import importPlugin from 'eslint-plugin-import'
import eslintConfigXo from 'eslint-config-xo'
import {defineConfig} from 'eslint/config'

const normalizeGlobals = globals => Object.fromEntries(
  Object.entries(globals).map(([name, value]) => [name, value === false ? 'readonly' : value]),
)

const browserConfig = eslintConfigXo({browser: true, space: 2, semicolon: false}).map(config => {
  if (config.name !== 'xo/base') {
    return config
  }

  return {
    ...config,
    languageOptions: {
      ...config.languageOptions,
      globals: normalizeGlobals(config.languageOptions.globals),
    },
  }
})
const nodeGlobals = normalizeGlobals(
  eslintConfigXo({space: 2, semicolon: false})
    .find(config => config.name === 'xo/base')
    .languageOptions.globals,
)
const browserGlobals = normalizeGlobals(
  browserConfig.find(config => config.name === 'xo/base').languageOptions.globals,
)
const nodeScopeGlobals = {
  ...Object.fromEntries(
    Object.keys(browserGlobals)
      .filter(name => !Object.hasOwn(nodeGlobals, name))
      .map(name => [name, 'off']),
  ),
  ...nodeGlobals,
}

const rootRules = {
  'capitalized-comments': 'off',
  indent: ['error', 2, {MemberExpression: 'off', SwitchCase: 1}],
  'max-params': ['warn', 5],
  'multiline-ternary': ['error', 'always-multiline'],
  'new-cap': 'off',
  'no-console': 'error',
  'object-curly-spacing': ['error', 'always'],
  'prefer-named-capture-group': 'off',
  semi: ['error', 'never'],
  '@stylistic/object-curly-spacing': ['error', 'always'],
  'unicorn/consistent-function-scoping': 'off',
  'unicorn/explicit-length-check': 'off',
  'unicorn/import-index': 'off',
  'unicorn/no-fn-reference-in-iterator': 'off',
  'unicorn/no-for-loop': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-unused-properties': 'error',
  'unicorn/no-useless-undefined': 'off',
  'unicorn/prefer-dataset': 'off',
  'unicorn/prefer-includes': 'off',
  'unicorn/prefer-node-append': 'off',
  'unicorn/prefer-node-remove': 'off',
  'unicorn/prefer-number-properties': 'off',
  'unicorn/prefer-optional-catch-binding': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-set-has': 'off',
  'unicorn/prevent-abbreviations': 'off',
}

export default defineConfig([
  {
    ignores: [
      '**/*.min.js',
      '**/dist/**',
      '**/vendor/**',
      '**/*.{css,scss,html,md,json,jsonc,json5}',
      '**/.babelrc.js',
      '_gh_pages/**',
      'docs/2.3.2/**',
      'js/coverage/**',
      'site/static/sw.js',
      'package.js',
    ],
  },
  ...browserConfig,
  {
    files: ['**/*.js'],
    ignores: ['site/**'],
    plugins: {import: importPlugin},
    rules: {
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      ...rootRules,
    },
  },
  {
    files: ['site/**/*.js'],
    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',
    },
    rules: {
      'capitalized-comments': 'off',
      indent: ['error', 2, {MemberExpression: 'off', SwitchCase: 1}],
      'multiline-ternary': ['error', 'always-multiline'],
      'no-new': 'off',
      'object-curly-spacing': ['error', 'always'],
      semi: ['error', 'never'],
      strict: 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      'unicorn/no-for-loop': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-dataset': 'off',
      'unicorn/prefer-includes': 'off',
      'unicorn/prefer-node-append': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['build/**/*.js', 'js/tests/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      globals: nodeScopeGlobals,
    },
    rules: {
      'no-console': 'off',
      strict: 'error',
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'unicorn/no-top-level-side-effects': 'off',
    },
  },
])
