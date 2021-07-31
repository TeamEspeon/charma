const express = require('express');
const charityOrgController = require('../controllers/charityOrgController');

const router = express.Router();

router.get('/', charityOrgController.findCharityOrgByZip, (req, res) => {
  res.status(200).json(res.locals.response);
});

module.exports = router;
