const apiRequest = require('./apiRequest');

async function getOrganization() { 
  const apiResponse = await apiRequest("GET", "/user/organization", "", null)
  return apiResponse;
}


module.exports = {getOrganization};