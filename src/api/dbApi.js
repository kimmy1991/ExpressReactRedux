/**
 * Created by kimmy on 09/03/2017.
 */
var mongoose = require('mongoose');
const db = mongoose.connection;

function addPosts(body) {
  db.collection('todo-list').save(body, function (err, result) {
    if (err) return console.log(err);

    console.log('saved to database');

    return result.ok;
  })
}

function getPosts() {
  return new Promise((resolve, reject) => {
    db.collection('quotes').find().toArray(function (err, results) {
      if (err) {
        console.log(err);
        return reject(err);
      }

      console.log(results);
      return resolve(results);
    })
  });
}

module.exports = {
  addPosts: addPosts,
  getPosts: getPosts
}