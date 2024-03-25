const { apiRequest } = require('./apiRequest');

async function createEqub(
  equb_account, 
  title, 
  description, 
  location, 
  latitude, 
  longitude, 
  period,
  amount,
  private,
) {
  const apiResponse = await apiRequest('POST', '/equb/create', '', { 
    equb_account, 
    title,
    description,
    location,
    latitude,
    longitude,
    period,
    amount,
    private,
  });
  return apiResponse;
}

async function updateEqub(
  id,
  title, 
  description, 
  location, 
  latitude, 
  longitude, 
  period,
  amount,
  private,
) {
  const apiResponse = await apiRequest('PUT', `/equb/update/${id}`, '', {
    title, 
    description, 
    location, 
    latitude, 
    longitude, 
    period,
    amount,
    private,
  });
  return apiResponse;
}

async function createNewRoundOfEqub(id) {
  const apiResponse = await apiRequest('GET', `/equb/create-new-round/${id}`, '', null);
  return apiResponse;
}

async function equbPayments(id) {
  const apiResponse = await apiRequest('GET', `/equb/payments/${id}`, '', null);
  return apiResponse;
}

async function equbRoundsByID(id) {
  const apiResponse = await apiRequest('GET', `/equb/rounds/${id}`, '', null);
  return apiResponse;
}

async function equbRoundsByName(name) {
  const apiResponse = await apiRequest('GET', `/equb/rounds/by-name/${name}`, '', null);
  return apiResponse;
}

async function listOfEqubs() {
  const apiResponse = await apiRequest('GET', '/equb/', '', null);
  return apiResponse;
}

async function findEqubsByUser() {
  const apiResponse = await apiRequest('GET', '/equb/find-by-user', '', null);
  return apiResponse;
}

async function findEqubByID(id) {
  const apiResponse = await apiRequest('GET', `/equb/find/${id}`, '', null);
  return apiResponse;
}

async function findEqubByName(name) {
  const apiResponse = await apiRequest('GET', `/equb/find-by-name/${name}`, '', null);
  return apiResponse;
}

async function payEqubRound(id, round, payment) {
  const apiResponse = await apiRequest('GET', `/equb/pay/${id}/${round}/${payment}`, '', null);
  return apiResponse;
}

async function findMembersOfEqub(id) {
  const apiResponse = await apiRequest('GET', `/equb/${id}/members`, '', null);
  return apiResponse;
}

async function removeMembersOfEqub(id) {
  const apiResponse = await apiRequest('GET', `/equb/remove-member/${id}`, '', null);
  return apiResponse;
}

async function joinEqub(id) {
  const apiResponse = await apiRequest('GET', `/equb/${id}/join`, '', null);
  return apiResponse;
}

async function leaveEqub(id) {
  const apiResponse = await apiRequest('GET', `/equb/${id}/leave`, '', null);
  return apiResponse;
}

module.exports = { 
  createEqub,
  updateEqub,
  createNewRoundOfEqub,
  equbPayments,
  equbRoundsByID,
  equbRoundsByName,
  listOfEqubs,
  findEqubsByUser,
  findEqubByID,
  findEqubByName,
  payEqubRound,
  findMembersOfEqub,
  removeMembersOfEqub,
  joinEqub,
  leaveEqub,
};
