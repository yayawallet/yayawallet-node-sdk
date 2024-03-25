const { apiRequest } = require('./apiRequest');

async function buyAirtime(phone, amount) {
  const apiResponse = await apiRequest('POST', '/airtime/buy', '', { phone, amount });
  return apiResponse;
}

async function listRecharges() {
  const apiResponse = await apiRequest('GET', '/airtime/', '', null);
  return apiResponse;
}

module.exports = { buyAirtime, listRecharges };
