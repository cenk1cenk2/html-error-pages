const ForkTypeScriptCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { merge } = require('webpack-merge')

const config = require('./webpack.config')

// can add workspace here as well
module.exports = merge(config, {
  mode: 'production',
  devtool: 'none',
  stats: 'minimal',
  plugins: [
    new ForkTypeScriptCheckerWebpackPlugin({
      tsconfig: './tsconfig.build.json',
      eslint: './.eslintrc.js'
    })
  ]
})
