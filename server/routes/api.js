const  express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

router.post('/verifyUser', 
  authController.verifyUser,
  (req, res) => (
    res.status(200).send(res.locals.user)
  )
);

router.post('/createUser',
  authController.createUser,
  (req, res) => (
    res.status(200).json(res.locals)
  )
);

router.post('/addFavorite',
  userController.addFavorite,
  (req, res) => (
    res.status(200).send('success')
  )
);

module.exports = router;