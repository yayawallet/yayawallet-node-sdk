const apiRequest = require('./apiRequest');

async function listInstitution(country) { 
  const apiResponse = await apiRequest("POST", "/financial-institution/list", "", {country})
  return apiResponse;
}

module.exports = {listInstitution};