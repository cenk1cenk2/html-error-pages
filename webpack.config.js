const config = require('config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TypeScriptConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_CONFIG_DIR = path.join(process.cwd(), 'config')
const CONFIG = config.util.toObject()

module.exports = {
  entry: {
    main: [ path.join(process.cwd(), 'src/main.tsx'), path.join(process.cwd(), 'src/polyfills.ts') ]
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: path.join('assets', 'js', '[name].[hash:8].js'),
    sourceMapFilename: path.join('assets', 'js', '[name].[hash:8].map'),
    chunkFilename: path.join('assets', 'js', '[name]-[id].[hash:8].js'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.mjs', '.jsx', '.js', '.json' ],
    plugins: [ new TypeScriptConfigPathsPlugin() ],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'react-is': path.resolve('./node_modules', 'react-is'),
      'styled-components': path.resolve('./node_modules', 'styled-components'),
      '@material-ui/styles': path.resolve('./node_modules', '@material-ui/styles'),
      '@material-ui/core': path.resolve('./node_modules', '@material-ui/core')
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [ '@svgr/webpack', 'url-loader' ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: path.join('assets', 'img'),
              name: '[hash:24].[ext]'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: path.join('assets', 'fonts')
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
                [
                  '@babel/plugin-transform-runtime',
                  {
                    absoluteRuntime: false,
                    helpers: true,
                    corejs: 3,
                    regenerator: true,
                    useESModules: true
                  }
                ],
                [ 'styled-components', { pure: true, ssr: true } ]
              ],
              presets: [
                '@babel/preset-react',
                '@babel/preset-typescript',
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3
                  }
                ],
                'minify'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'assets/index.html',
      title: CONFIG.package.name,
      minify: false,
      favicon: 'assets/img/logo.svg'
    }),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(CONFIG)
    })
  ],
  node: {
    process: 'mock'
  }
}
