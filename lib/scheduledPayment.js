const { apiRequest } = require('./apiRequest');

async function createScheduledPayment(
  account_number,
  amount,
  reason,
  recurring,
  start_at,
  meta_data
) {
  const apiResponse = await apiRequest(
    'POST',
    '/scheduled-payment/create',
    {},
    { account_number, amount, reason, recurring, start_at, meta_data }
  );
  return apiResponse;
}

async function listOfScheduledPayments() {
  const apiResponse = await apiRequest('GET', '/scheduled-payment/list', {}, null);
  return apiResponse;
}

async function archiveScheduledPayment(id) {
  const apiResponse = await apiRequest('GET', `/scheduled-payment/archive/${id}`, {}, null);
  return apiResponse;
}

module.exports = { createScheduledPayment, listOfScheduledPayments, archiveScheduledPayment };
