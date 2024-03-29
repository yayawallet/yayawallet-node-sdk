const { apiRequest } = require('./apiRequest');

async function getOrganization() {
  const apiResponse = await apiRequest('GET', '/user/organization', {}, null);
  return apiResponse;
}

async function getProfile() {
  const apiResponse = await apiRequest('GET', '/user/profile', {}, null);
  return apiResponse;
}

module.exports = { getOrganization, getProfile };
