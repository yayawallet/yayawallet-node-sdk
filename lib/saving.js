const { apiRequest } = require('./apiRequest');

async function createSaving(amount, action) {
  const apiResponse = await apiRequest('POST', '/saving/create', '', action? { amount, action }: { amount, action: 'deposit' });
  return apiResponse;
}

async function withdrawSaving() {
  const apiResponse = await apiRequest('GET', '/saving/withdrawals', '', null);
  return apiResponse;
}

async function claim(request_ids) {
  const apiResponse = await apiRequest('POST', '/saving/refund', '', {request_ids});
  return apiResponse;
}

module.exports = { createSaving, withdrawSaving, claim };
