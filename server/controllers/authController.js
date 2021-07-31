const User = require('../models/user');

const authController = {

  verifyUser(req, res, next) {
    const { email, password } = req.body;
    console.log(req.body);

    User.findOne({ email }, (err, user) => {
      if (err) console.log(err);
      console.log('user: ', user);
      user.validatePassword(password, (err, isMatch) => {
        if (err) next(err);

        if (isMatch) {
          res.locals.user = user;
          return next();
        } else {
          res.status(401).send('Email and Password do not match');
        }
      });

    });
  },

  createUser(req, res, next) {
    const { firstName, lastName, email, password, lastLocation } = req.body;

    User.create({
      firstName,
      lastName,
      email,
      lastLocation,
      password,
    }, (err, user) => {
      if (err) { throw err; }
      res.locals.user = user;
      return next();
    });
  },

};

module.exports = authController;