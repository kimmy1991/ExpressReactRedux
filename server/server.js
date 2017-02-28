var express  = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');

var config = require('./../config/webpack.config.js');
var compiler = webpack(config);

var app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
}));

app.use(webpackHotMiddleware(compiler));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});



app.get('/api', function(req, res, next) {
  res.send('hello');
});

app.listen(3000, function() {
  console.log('listening to port 3000')
});

// app.use('/static', express.static(__dirname + '/src'));
