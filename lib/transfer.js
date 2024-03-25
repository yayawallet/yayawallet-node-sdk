const { apiRequest } = require('./apiRequest');

async function getTransferList() {
  const apiResponse = await apiRequest('GET', '/transfer/', '', null);
  return apiResponse;
}

async function transferAsUser(
  institution_code,
  account_number,
  amount,
  ref_code,
  sender_note,
  phone
) {
  const apiResponse = await apiRequest('POST', '/transfer/send', '', {
    institution_code,
    account_number,
    amount,
    ref_code,
    sender_note,
    phone
  });
  return apiResponse;
}

async function externalAccountLookup(institution_code, account_number) {
  const apiResponse = await apiRequest('POST', '/transfer/lookup-external', '', {
    institution_code,
    account_number
  });
  return apiResponse;
}

async function getTransferFee(institution_code, amount) {
  const apiResponse = await apiRequest('POST', '/transfer/fee', '', { institution_code, amount });
  return apiResponse;
}

module.exports = { getTransferList, transferAsUser, externalAccountLookup, getTransferFee };
