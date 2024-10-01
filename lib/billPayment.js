const { apiRequest } = require('./apiRequest');

async function billList(client_yaya_account, params = { p: '1' }) {
  const apiResponse = await apiRequest('POST', '/bill/list', params, { client_yaya_account });
  return apiResponse;
}

async function createMultipleBills(arr) {
  const apiResponse = await apiRequest('POST', '/bulkimport/bills', {}, arr);
  return apiResponse;
}

async function checkBulkImport() {
  const apiResponse = await apiRequest('GET', '/bulkimport/list', {}, null);
  return apiResponse;
}

// client_yaya_account and bill_id are required to identify the bill which needs theupdate.
// client_yaya_account and bill_id are not going to be modified.
async function updateBill(updatedBill) {
  const apiResponse = await apiRequest('POST', '/bill/update', {}, updatedBill);
  return apiResponse;
}

async function findBill(bill_id, client_yaya_account) {
  const apiResponse = await apiRequest(
    'POST',
    '/bill/find',
    {},
    {
      bill_id,
      client_yaya_account,
    }
  );
  return apiResponse;
}

async function createBill(
  client_yaya_account,
  customer_yaya_account,
  amount,
  start_at,
  due_at,
  customer_id,
  bill_id,
  bill_code,
  bill_season,
  cluster,
  description,
  phone,
  email
) {
  const apiResponse = await apiRequest(
    'POST',
    '/bill/create',
    {},
    {
      client_yaya_account,
      customer_yaya_account,
      amount,
      start_at,
      due_at,
      customer_id,
      bill_id,
      bill_code,
      bill_season,
      cluster,
      description,
      phone,
      email,
    }
  );
  return apiResponse;
}

// const payoutMethod = {client_yaya_account, cluster, bill_code, institution, account_number, details: []}
async function createPayoutMethod(payoutMethod) {
  const apiResponse = await apiRequest('POST', '/payout-method/create', {}, payoutMethod);

  return apiResponse;
}

async function createMultiplePayoutMethods(arr) {
  const apiResponse = await apiRequest('POST', '/bulkimport/payout-methods', {}, arr);

  return apiResponse;
}

async function getAllPayoutMethods(client_yaya_account) {
  const apiResponse = await apiRequest('POST', '/payout-method/list', {}, { client_yaya_account });

  return apiResponse;
}

async function deletePayoutMethod(id) {
  const apiResponse = await apiRequest('DELETE', `/payout-method/delete/${id}`, {}, null);
}

module.exports = {
  createBill,
  createMultipleBills,
  checkBulkImport,
  findBill,
  updateBill,
  billList,
  createPayoutMethod,
  createMultiplePayoutMethods,
  getAllPayoutMethods,
  deletePayoutMethod,
};
