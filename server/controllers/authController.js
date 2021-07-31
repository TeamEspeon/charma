const User = require('../models/user');

const authController = {

  verifyUser(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      if (err) next(err);

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

    User.findOne({ email }, (err, user) => {
      if (err) next(err);

      if (user) {
        res.status(422).send('Email already in use');
      }
    });

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

  // resetPassword(req, res, next) {

  // },

};

module.exports = authController;