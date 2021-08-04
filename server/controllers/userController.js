const User = require('../models/user');
// const Charity = require('../models/charityOrg');

const userController = {

  addFavorite(req, res, next) {
    const { userId, ein } = req.body;
    console.log("addFavorite: ", userId, ein);
    User.findOneAndUpdate(
      {'_id': userId},
      {$push: {favorites: {ein: ein}}
      }).then(() => next());
  },


};

module.exports = userController;