const apiRequest = require('./apiRequest');

async function findByInviter() { 
  const apiResponse = await apiRequest("GET", "/invitation/find-by-inviter", "", null)
  return apiResponse;
}

async function createInvitation(country, phone, amount) { 
  const apiResponse = await apiRequest("POST", "/invitation/create", "", {country, phone, amount})
  return apiResponse;
}


module.exports = {findByInviter, createInvitation};