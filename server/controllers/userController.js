// const User = require('../models/user');

// const userController = {

//   addFavorite(req, res, next) {
//     const { userId, ein } = req.body;

//     User.findOneAndUpdate(
//       {'_id': userId},
//       {$push: {favorites: {
//         charity_id: ein,
//       }}
//       }).then(() => next());

//   },


// };

// module.exports = userController;