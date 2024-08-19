const { apiRequest } = require('./apiRequest');

async function gender() {
  const apiResponse = await apiRequest('GET', '/lookup/gender', {}, null);
  return apiResponse;
}

async function region() {
  const apiResponse = await apiRequest('GET', '/lookup/region', {}, null);
  return apiResponse;
}

async function businessCategories() {
  const apiResponse = await apiRequest('GET', '/lookup/business-categories', {}, null);
  return apiResponse;
}

module.exports = { gender, region, businessCategories };
