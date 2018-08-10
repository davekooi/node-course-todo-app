const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectId('5b69bc27e43c1a464e3d11a1')
//   }, {
//     $set: {
//         completed: true
//     }
//   }, {
//       returnOriginal: false
//   }).then((results) => {
//       console.log(results);
//   });

  db.collection('Users').findOneAndUpdate({
      _id: new ObjectId('5b69bf28b5fce0471ec4421b')
  }, {
      $set: {
          name: 'David'
      },
      $inc: {
          age: 1
      }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  });

//   db.close();
});