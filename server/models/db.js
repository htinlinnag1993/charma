const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

function connectDb() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Charma'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));
}

module.exports = {
  connectDb
};