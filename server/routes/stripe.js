const express = require('express');
const stripeController = require('../controllers/stripeController');

const router = express.Router();

router.post('/', stripeController.createPaymentIntent, (req, res) => {
  res.status(200).json(res.locals.response);
});

module.exports = router;
