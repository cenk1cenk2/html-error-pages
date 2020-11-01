const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { merge } = require('webpack-merge')

module.exports = {
  webpack: (config, options) => {
    const { dev, isServer } = options
    const { cssModules, cssLoaderOptions, postcssLoaderOptions, sassLoaderOptions = {} } = config

    options.defaultLoaders.sass = cssLoaderConfig(config, {
      extensions: [ 'scss', 'sass' ],
      cssModules,
      cssLoaderOptions,
      postcssLoaderOptions,
      dev,
      isServer,
      loaders: [
        {
          loader: 'sass-loader',
          options: sassLoaderOptions
        }
      ]
    })

    return merge(config, {
      resolve: {
        plugins: [ new TsconfigPathsPlugin() ],
        alias: {
          'styled-components': path.resolve('./node_modules', 'styled-components'),
          '@material-ui/styles': path.resolve('./node_modules', '@material-ui/styles'),
          '@material-ui/core': path.resolve('./node_modules', '@material-ui/core')
        }
      },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [ 'css-loader' ]
          },
          {
            test: /index\.html$/,
            loader: 'html?attrs=link:href'
          },
          {
            test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/fonts/'
                }
              }
            ]
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
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[hash:24].[ext]'
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: options.defaultLoaders.sass
          },
          {
            test: /\.sass$/,
            use: options.defaultLoaders.sass
          }
        ]
      }
    })
  },
  target: 'serverless'
}
