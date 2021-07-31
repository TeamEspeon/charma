require('dotenv').config();
const axios = require('axios');
const charityOrgController = {};

const {CHARITY_APP_URL, CHARITY_APP_ID, CHARITY_APP_SECRET} = process.env;
const getURL = (zip) => `${CHARITY_APP_URL}?app_id=${CHARITY_APP_ID}&app_key=${CHARITY_APP_SECRET}&zip=${zip}`;

charityOrgController.findCharityOrgByZip = async (req, res, next) => {
  const {zip} = req.query;
  try {
    const {data: charityOrgList} = await axios(getURL(zip));
    res.locals.response = charityOrgList;
    next();
  } catch (error) {
    console.log(error);
    next({
      log: `Find Charity Org By Zip - ERROR: ${error}`,
      message: {
        err: 'Error occured in charityOrgController.findCharityOrgByZip',
        message: error,
      },
    });
  }
};

module.exports = charityOrgController;
