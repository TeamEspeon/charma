const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

function connectDb() {
  console.log(MONGO_URI);
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