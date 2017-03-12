var express = require('express');
var webpack = require('webpack');
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
var path = require('path');
var bodyParser = require('body-parser');
// import dbApi from '../src/api/dbApi.js';

var env = process.env.NODE_ENV || 'development';
var app = express();
//NODE_ENV variable in package json is not used in aws we need to set the variable on the server itself
if (env === 'development') {
var webpackDevMiddleware = require('webpack-dev-middleware');

}


// if (env === 'development') {
//   const config = require('./../config/webpack.config.js');
//   const compiler = webpack(config);
//
//   app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//     contentBase: 'src',
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false
//     }
//   }));
//
//   app.use(webpackHotMiddleware(compiler));
// }

//Database
// require('../config/database')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


if (env === 'production') {
  app.use(express.static(__dirname + '/../static'));
}

app.get('/api', function (req, res, next) {
  res.send('hello');
});

// app.post('/quotes', (req, res) => {
//   dbApi.addPosts(req.body)
// });

// app.get('/quotes', (req, res) => {
//   dbApi.getPosts().then((posts)=>{
//     console.log('fdsfsdfsdf', posts);
//
//     res.send(posts);
//   });
// });

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express listening on port ' + process.env.PORT + ' or 3000');
});