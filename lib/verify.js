const jwtSign = require('jsonwebtoken');
const CONSTANTS = require('../utils/constants');

function getVerifiedPaymentDetails(data, signature) {
  if (verifySignature(data, signature)) {
    return {
      amount: data.amount,
      yaya_id: data.id,
      currency: data.currency,
      cause: data.cause,
      full_name: data.full_name,
      account_name: data.account_name,
      invoice_url: data.invoice_url
    };
  }
  return false;
}

function verifySignature(data, signature) {
  const signedPayload = jwtSign.sign(
    Buffer.from(Object.values(data).join(''), 'utf-8').toString(),
    process.env.YAYA_API_SECRET,
    { algorithm: 'HS256' }
  );
  const currentUnix = (new Date().getTime() / 1000) | 0;
  if (signedPayload === signature && currentUnix - data.timestamp <= CONSTANTS.TimestampExpiry) {
    return true;
  }
  return false;
}

module.exports = { getVerifiedPaymentDetails };
