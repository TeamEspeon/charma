const User = require('../models/user');

const userController = {

  addFavorite(req, res, next) {
    const { userId, ein } = req.body;

    User.findOneAndUpdate(
      {'_id': userId},
      {$push: {favorites: {ein: ein}}
    })
    .then(() => next());
    
  },

  addProfilePicture(req, res, next) {
    const { userId, photoUrl } = req.body;

    User.findOneAndUpdate(
      {'_id': userId},
      {profilePhoto: photoUrl}
    )
    .then(() => next())
  }
};

module.exports = userController;