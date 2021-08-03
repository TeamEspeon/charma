const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharityOrgSchema = new Schema({
  ein: {
    type: String,
    required: true
  },
});

const CharityOrg = mongoose.model('charityOrg', CharityOrgSchema);

module.exports = CharityOrg;