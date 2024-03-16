const apiRequest = require('./apiRequest');

async function getProfile(account_name) {
  const apiResponse = await apiRequest("POST", "/user/profile",
  '', {account_name})
  return apiResponse;
}

module.exports = getProfile;