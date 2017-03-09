import express from 'express';
// import webpack from 'webpack';
// var webpackDevMiddleware = require('webpack-dev-middleware');
// var webpackHotMiddleware = require('webpack-hot-middleware');
import path from 'path';
import bodyParser from 'body-parser';
import dbApi from '../src/api/dbApi.js';
import mongoose from 'mongoose';

// var config = require('./../config/webpack.config.js');
// var compiler = webpack(config);

mongoose.connect('mongodb://kimmy:welcome@ds123930.mlab.com:23930/todo-crud');


const app = express();
const db = mongoose.connection;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  app.listen(process.env.PORT || 3000, function () {
    console.log('Express listening on port ' + process.env.PORT + ' or 3000');
  });
});



// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
//   contentBase: 'src',
//   stats: {
//     colors: true,
//     hash: false,
//     timings: true,
//     chunks: false,
//     chunkModules: false,
//     modules: false
//   }
// }));
//
// app.use(webpackHotMiddleware(compiler));

app.use(express.static(__dirname + '/../static'));

app.get('/api', function (req, res, next) {
  res.send('hello');
});


app.post('/quotes', (req, res) => {
  dbApi.addPosts(req.body)
});

app.get('/quotes', (req, res) => {
  dbApi.getPosts().then((posts)=>{
    console.log('fdsfsdfsdf', posts);

    res.send(posts);
  });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});
