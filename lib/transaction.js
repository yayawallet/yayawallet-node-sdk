const { apiRequest } = require('./apiRequest');

async function getTransactionListByUser(param='?p=1') {
  const apiResponse = await apiRequest('GET', '/transaction/find-by-user', param, null);
  return apiResponse;
}

async function createTransaction(receiver, amount, cause, meta_data) {
  const apiResponse = await apiRequest('POST', '/transaction/create', '', {
    receiver,
    amount,
    cause,
    meta_data
  });
  return apiResponse;
}

async function transactionFee(receiver, amount) {
  const apiResponse = await apiRequest('POST', '/transaction/fee', '', { receiver, amount });
  return apiResponse;
}

async function generateQrUrl(amount, cause) {
  const apiResponse = await apiRequest('POST', '/transaction/qr-generate', '', { amount, cause });
  return apiResponse;
}

async function getTransactionById(id) {
  const apiResponse = await apiRequest('GET', `/transaction/find/${id}`, '', null);
  return apiResponse;
}

async function searchTransaction(query) {
  const apiResponse = await apiRequest('POST', '/transaction/search', '', { query });
  return apiResponse;
}

module.exports = {
  getTransactionListByUser,
  createTransaction,
  transactionFee,
  generateQrUrl,
  getTransactionById,
  searchTransaction
};
