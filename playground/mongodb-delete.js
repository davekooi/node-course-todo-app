const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  db.collection('Users').deleteMany({name : 'David'}).then((result) => {
      console.log(result);
  });

  db.collection('Users').findOneAndDelete({name : 'Bob'}).then((result) => {
      console.log(result);
  })

//   db.close();
});