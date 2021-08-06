require('dotenv').config();
const axios = require('axios');
const charityOrgController = {};

const {CHARITY_APP_URL, CHARITY_APP_ID, CHARITY_APP_SECRET} = process.env;

charityOrgController.findCharityOrgsByZip = async (req, res, next) => {
  const {zip} = req.query;
  const URL = `${CHARITY_APP_URL}?app_id=${CHARITY_APP_ID}&app_key=${CHARITY_APP_SECRET}&pageSize=10&zip=${zip}`;
  try {
    const {data: charityOrgList} = await axios(URL);
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

charityOrgController.findCharityOrgByEIN = async (req, res, next) => {
  const {ein} = req.params;
  const URL = `${CHARITY_APP_URL}${ein}?app_id=${CHARITY_APP_ID}&app_key=${CHARITY_APP_SECRET}`;
  try {
    const {data: charityOrg} = await axios(URL);
    res.locals.response = charityOrg;
    next();
  } catch (error) {
    // console.log(error);
    // next({
    //   log: `Find Charity Org By EIN - ERROR: ${error}`,
    //   message: {
    //     err: 'Error occured in charityOrgController.findCharityOrgByEIN',
    //     message: error,
    //   },
    // });
  }
};

module.exports = charityOrgController;
