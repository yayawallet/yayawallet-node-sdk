const fetch = require("node-fetch");
const getTime = require('./time')
const apiRequest = require('./apiRequest')
const generateSignature = require('./generateSignature');
const CONSTANTS = require("../utils/constants");

async function getQRCodeUrl(apiSecret, apiKey, amount, cause) { 
  const apiResponse = await apiRequest(apiSecret, apiKey, "POST", "/transaction/qr-generate", cause?{amount, cause}: {amount})
  return apiResponse;
}

module.exports = getQRCodeUrl;