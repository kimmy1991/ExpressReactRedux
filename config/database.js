var mongoose = require('mongoose');
module.exports = function () {
  // register models
  // require('./models/Todo');
  const db = mongoose.connection;


  // connect to database
  mongoose.connect('mongodb://kimmy:welcome@ds123930.mlab.com:23930/todo-crud');

  // mongoose.connect(envConfig.database, function(){
  //   console.log('connected to database!')
  // });

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
      console.log('connected to database!')
  });
};