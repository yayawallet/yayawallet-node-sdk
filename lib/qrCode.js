const apiRequest = require('./apiRequest');

async function getQRCodeUrl(apiSecret, apiKey, amount, cause) { 
  const apiResponse = await apiRequest(apiSecret, apiKey, "POST", "/transaction/qr-generate", cause?{amount, cause}: {amount})
  return apiResponse;
}

module.exports = getQRCodeUrl;