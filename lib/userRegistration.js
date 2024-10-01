const { apiRequest } = require('./apiRequest');

async function createUser(newUser) {
  const apiResponse = await apiRequest('POST', '/user/register', {}, newUser);
  return apiResponse;
}

async function getFaydaOTP(fin) {
  const apiResponse = await apiRequest('GET', `/kyc/fayda/request-otp/${fin}`, {}, null);
  return apiResponse;
}

async function getFaydaDetails(fin, transactionId, otp) {
  const apiResponse = await apiRequest(
    'GET',
    `/kyc/fayda/get-kyc-details/${fin}/${transactionId}/${otp}`,
    {},
    null
  );
  return apiResponse;
}

async function getBusinessLicense(tin_number) {
  const apiResponse = await apiRequest('GET', `/kyc/etrade/find-by-tin/${tin_number}`, {}, null);
  return apiResponse;
}

async function getBusinessDetails(tin_number, licenseNumber) {
  const apiResponse = await apiRequest(
    'POST',
    `/kyc/etrade/find-by-license-number/${tin_number}`,
    {},
    { licenseNumber: licenseNumber }
  );
  return apiResponse;
}

async function createInvite(phone, amount, country = 'Ethiopia') {
  const apiResponse = await apiRequest(
    'POST',
    '/invitation/create',
    {},
    { phone, amount, country }
  );

  return apiResponse;
}

async function sendOTP(phone, invite_hash, country = 'Ethiopia') {
  const apiResponse = await apiRequest(
    'POST',
    '/invitation/otp',
    {},
    { phone, country, invite_hash }
  );

  return apiResponse;
}

module.exports = {
  createUser,
  getFaydaOTP,
  getFaydaDetails,
  getBusinessLicense,
  getBusinessDetails,
  createInvite,
  sendOTP,
};
