const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.method('validatePassword', function(data, cb) {
  return bcrypt.compare(data, this.password, function(err, isMatch) {
    if (err) {
      return cb(err, false);
    }
    return cb(null, isMatch);
  });
});

const User = mongoose.model('User', userSchema);

module.exports = User;