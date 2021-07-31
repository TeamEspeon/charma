const express = require('express');
const charityOrgController = require('../controllers/charityOrgController');

const router = express.Router();

router.get('/', charityOrgController.findCharityOrgsByZip, (req, res) => {
  res.status(200).json(res.locals.response);
});

router.get('/:ein', charityOrgController.findCharityOrgByEIN, (req, res) => {
  res.status(200).json(res.locals.response);
});

module.exports = router;
