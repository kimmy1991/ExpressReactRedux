var webpack = require('webpack');
var path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PATHS = {
  app: path.resolve(__dirname, '/src'),
  dist: path.resolve(__dirname, '/static')
};

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src/containers/AppContainer.js'
  ],
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        })

        //!resolve-url!postcss
        // loaders: [
        //   'style-loader?sourceMap',
        //   'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        // ]
        // loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"})
        // loader: ExtractTextPlugin.extract('style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    new ExtractTextPlugin("main.css")
  ]
};