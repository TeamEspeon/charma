// enter base api routes here
const  express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/createUser', 
  authController.createUser,
  (req, res) => (
    res.status(200).send('user created successfully')
  )
);

module.exports = router;