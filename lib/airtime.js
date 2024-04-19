const { apiRequest } = require('./apiRequest');

async function buyAirtime(phone, amount) {
  const apiResponse = await apiRequest('POST', '/airtime/buy', {}, { phone, amount });
  return apiResponse;
}

async function buyPackage(phone, package) {
  const apiResponse = await apiRequest('POST', '/airtime/buy', {}, { phone, package });
  return apiResponse;
}

async function listPackages(phone) {
  const apiResponse = await apiRequest('POST', '/airtime/packages', {}, { phone });
  return apiResponse;
}

async function listRecharges() {
  const apiResponse = await apiRequest('GET', '/airtime/list', {}, null);
  return apiResponse;
}

module.exports = { buyAirtime, listRecharges, buyPackage, listPackages };
