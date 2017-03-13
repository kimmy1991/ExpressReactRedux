var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../static')
};

module.exports = {
  entry: {
    app: path.resolve(PATHS.app, 'containers/AppContainer.js')
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
        // loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        })
        // loader: ExtractTextPlugin.extract('style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]')
      }
    ]
  },
  plugins: [

    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    new ExtractTextPlugin("main.css")
  ]
};