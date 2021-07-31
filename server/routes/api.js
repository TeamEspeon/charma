const  express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/verifyUser', 
  authController.verifyUser,
  (req, res) => (
    res.status(200).send(res.locals.user)
  )
);

router.post('/createUser',
  authController.createUser,
  (req, res) => (
    res.status(200).send('user created successfully')
  )
);



module.exports = router;