const User = require('../models/user');

const authController = {

  // authUser(req, res, next) {
  //   const { username, password } = req.body;
  //   res.locals.jwt = '';
  //   User.findOne({}).then()
  // },

  createUser(req, res, next) {
    const { firstName, lastName, email, lastLocation } = req.body;
    
    console.log(req.body);
    User.create({
      firstName,
      lastName,
      email,
      lastLocation,
    }, (err, user) => {
      if (err) { throw err; }
      res.locals.user = user;
      console.log(res.locals.user);
      return next();
    });
  },
    

};

module.exports = authController;