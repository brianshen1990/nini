// const path = require('path')
// const emotionPath = path.dirname(require.resolve())
// storybook/main.js
// babel: async (options) => ({
//   ...options,
//   presets: [...options.presets, '@emotion/babel-preset-css-prop'],
// }),
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-knobs'
  ],
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, '@emotion/babel-preset-css-prop'],
  }),
  // webpackFinal: async (config) => {
  //   const emotionReactEleven = path.dirname(require.resolve('@emotion/react/package.json'))
  //   const emotionStyledEleven = path.dirname(require.resolve('@emotion/styled/package.json'))
  //   return {
  //     ...config,
  //     resolve: {
  //       ...config.resolve,
  //       alias: {
  //         ...config.resolve.alias,
  //         '@emotion/core': emotionReactEleven,
  //         '@emotion/styled': emotionStyledEleven,
  //         'emotion-theming': emotionReactEleven,
  //       },
  //     },
  //   }
  // }
}