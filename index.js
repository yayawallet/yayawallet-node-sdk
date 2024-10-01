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
const equb = require('./lib/equb');
const recurringContract = require('./lib/recurringContract');
const scheduledPayment = require('./lib/scheduledPayment.js');
const billPayment = require('./lib/billPayment.js');
const lookups = require('./lib/lookups.js');
const userRegistration = require('./lib/userRegistration.js');

module.exports = {
  ...userRegistration,
  ...lookups,
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
  ...equb,
  ...recurringContract,
  ...scheduledPayment,
  ...billPayment,
};
