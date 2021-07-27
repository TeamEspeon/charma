const e = require('express');
const db = require('../models/db');
const bcrypt = require('bcrypt');

const authController = {

  // createUser(req, res, next) {

  // },

  authUser(req, res, next) {
    console.log(req.body);
    const { username, password } = req.body;
    res.locals.jwt = ''
    if (username && password) {
      return next();
    } else {
      return next();
    }
  },

}

module.exports = authController;