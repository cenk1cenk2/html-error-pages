const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const ForkTypeScriptCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { merge } = require('webpack-merge')

const config = require('./webpack.config')

// can add workspace here as well
module.exports = merge(config, {
  stats: 'errors-warnings',
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 4200,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new ForkTypeScriptCheckerWebpackPlugin({
      tsconfig: './tsconfig.build.json',
      eslint: './.eslintrc.js'
    })
  ]
})
