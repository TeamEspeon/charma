const mongoose = require('mongoose');

const {
  Types: {
    // Mixed,
    // Number,
    ObjectId,
    String
  },
} = mongoose.Schema;

const options = {
  timestamps: true, 
  createdAt: 'created_at', 
  updatedAt: 'updated_at'
};

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: {
    type: String,
  },
  lastLocation: {
    type: String,
  },
  favorites: {
    type: [ObjectId],
  }
}, options);

const User = mongoose.model('User', userSchema);

module.exports = User;