const { apiRequest } = require('./apiRequest');

async function billList(client_yaya_account) {
  const apiResponse = await apiRequest('POST', '/bill/list', {}, { client_yaya_account });
  return apiResponse;
}

async function createMultipleBill(arr) {
  const apiResponse = await apiRequest('POST', '/bulkimport/bills', {}, arr);
  return apiResponse;
}

async function checkBulkImport() {
  const apiResponse = await apiRequest('GET', '/bulkimport/list', {}, null);
  return apiResponse;
}

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
  fwd_institution,
  fwd_account_number,
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
      fwd_institution,
      fwd_account_number,
      description,
      phone,
      email,
    }
  );
  return apiResponse;
}

module.exports = {
  createBill,
  createMultipleBill,
  checkBulkImport,
  findBill,
  updateBill,
  billList,
};
