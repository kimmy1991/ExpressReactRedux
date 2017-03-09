var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src/containers/AppContainer.js'
  ],
  output: {
    path: '/',
    publicPath: '/static',
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
        loader: ExtractTextPlugin.extract({fallback:"style-loader", use:"css-loader"})
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