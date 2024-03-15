const apiRequest = require('./apiRequest');

async function getQRCodeUrl(amount, cause) { 
  const apiResponse = await apiRequest("POST", "/transaction/qr-generate", cause?{amount, cause}: {amount})
  return apiResponse;
}

module.exports = getQRCodeUrl;