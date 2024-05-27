const { apiRequest, apiRequest } = require('./apiRequest');

async function getProfile() {
  const apiResponse = await apiRequest('GET', '/user/profile', {}, null);
  return apiResponse;
}

async function getBalance() {
  const apiRequest = await apiRequest('GET', '/user/balance', {}, null);
  return apiRequest;
}

async function searchUser(query) {
  const apiResponse = await apiRequest('POST', '/user/search', {}, { query: query });
  return apiResponse;
}

async function getOrganization() {
  const apiResponse = await apiRequest('GET', '/user/organization', {}, null);
  return apiResponse;
}

module.exports = { getProfile, getBalance, searchUser, getOrganization };
