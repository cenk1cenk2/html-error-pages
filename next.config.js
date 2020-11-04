const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = {
  webpack: (config, options) => {
    const { isServer, assetPrefix } = options

    const cssConfig = withCSS(withSass(config)).webpack

    return merge(config, cssConfig, {
      resolve: {
        plugins: [ new TsconfigPathsPlugin() ],
        alias: {
          react: path.resolve('./node_modules', 'react'),
          'react-dom': path.resolve('./node_modules', 'react-dom'),
          'react-is': path.resolve('./node_modules', 'react-is'),
          'styled-components': path.resolve('./node_modules', 'styled-components'),
          '@material-ui/styles': path.resolve('./node_modules', '@material-ui/styles'),
          '@material-ui/core': path.resolve('./node_modules', '@material-ui/core')
        }
      },
      module: {
        rules: [
          {
            test: /index\.html$/,
            loader: 'html?attrs=link:href'
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  dimensions: true,
                  replaceAttrValues: {
                    '#ff00ff': 'currentColor',
                    '#f0f': 'currentColor'
                  }
                }
              }
            ]
          },
          {
            test: /\.(jpg|png)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: require.resolve('url-loader'),
                options: {
                  limit: 8192,
                  fallback: require.resolve('file-loader'),
                  publicPath: `${assetPrefix}/assets/imgs/`,
                  outputPath: `${isServer ? '../' : ''}static/assets/imgs/`,
                  name: '[name]-[hash].[ext]'
                }
              }
            ]
          }
        ]
      }
    })
  },
  target: 'serverless'
}
