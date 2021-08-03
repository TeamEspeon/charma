const User = require('../models/user');

const authController = {

  verifyUser(req, res, next) {
    const { email, password } = req.body;

    User.findOne({ email }, (err, user) => {
      if (err) next(err);

      user.validatePassword(password, (error, isMatch) => {
        if (error) return next({
          log: `Find Charity Org By EIN - ERROR: ${error}`,
          message: {
            err: 'Error occured in charityOrgController.findCharityOrgByEIN',
            message: error,
          },
        });

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

    User.findOne({ email }, (error, user) => {
      if (error) { return next({
        log: `createUser: check for existing user - ERROR: ${error}`,
        message: {
          err: 'Error occured in charityOrgController.findCharityOrgByEIN',
          message: error,
        },
      });
      }

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
    }, (error, user) => {
      if (error) { return next({
        log: `createUser: User.create - ERROR: ${error}`,
        message: {
          err: 'Error occured in charityOrgController.findCharityOrgByEIN',
          message: error,
        },
      });
      }
      res.locals.user = user;
      return next();
    });
  },

  // resetPassword(req, res, next) {

  // },

};

module.exports = authController;