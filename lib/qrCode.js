const apiRequest = require('./apiRequest');

async function getQRCodeUrl(amount, cause) { 
  const apiResponse = await apiRequest(process.env.API_SECRET, process.env.API_KEY, "POST", "/transaction/qr-generate", cause?{amount, cause}: {amount})
  return apiResponse;
}

module.exports = getQRCodeUrl;