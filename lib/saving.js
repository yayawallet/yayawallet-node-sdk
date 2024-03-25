const { apiRequest } = require('./apiRequest');

async function createSaving(amount, action) {
  const apiResponse = await apiRequest('POST', '/saving/create', '', { amount, action });
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
