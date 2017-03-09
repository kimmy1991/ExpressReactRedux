/**
 * Created by kimmy on 09/03/2017.
 */

function addPosts(db, body) {
  db.collection('todo-list').save(body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to database');
  })
}

export default {
  addPosts: addPosts
}