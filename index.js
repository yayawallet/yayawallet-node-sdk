const airtime = require('./lib/airtime');
const generateSignature = require('./lib/generateSignature.js');
const institution = require('./lib/institution');
const invitation = require('./lib/invitation');
const saving = require('./lib/saving');
const time = require('./lib/time');
const transaction = require('./lib/transaction');
const transfer = require('./lib/transfer');
const user = require('./lib/user');
const verify = require('./lib/verify');

module.exports = {
  ...airtime,
  ...generateSignature,
  ...institution,
  ...invitation,
  ...saving,
  ...time,
  ...transaction,
  ...transfer,
  ...user,
  ...verify,
};
