const { apiRequest } = require('./apiRequest');

async function getOrganization() {
  const apiResponse = await apiRequest('GET', '/user/organization', {}, null);
  return apiResponse;
}

async function getProfile(account_name) {
  const apiResponse = await apiRequest('POST', '/user/profile', {}, { account_name });
  return apiResponse;
}

module.exports = { getOrganization, getProfile };
