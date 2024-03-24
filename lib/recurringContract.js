const { apiRequest } = require('./apiRequest');

async function listAllContracts() {
  const apiResponse = await apiRequest('GET', '/recurring-contract/', '', null);
  return apiResponse;
}

async function createContract(contract_number, service_type, customer_account_name, meta_data) {
  const apiResponse = await apiRequest('POST', '/recurring-contract/create', '', { 
    contract_number, 
    service_type, 
    customer_account_name, 
    meta_data 
  });
  return apiResponse;
}

async function requestPayment(contract_number, amount, currency, cause, notification_url, meta_data) {
  const apiResponse = await apiRequest('POST', '/recurring-contract/request-payment', '', { 
    contract_number, 
    amount,  
    currency,
    cause,
    notification_url,
    meta_data,
  });
  return apiResponse;
}

async function getSubscriptions() {
  const apiResponse = await apiRequest('GET', '/recurring-contract/subscriptions', '', null);
  return apiResponse;
}

async function getListOfPaymentRequests() {
  const apiResponse = await apiRequest('GET', '/recurring-contract/payment-requests', '', null);
  return apiResponse;
}

async function approvePaymentRequest(id) {
  const apiResponse = await apiRequest('GET', `/recurring-contract/approve-payment/${id}`, '', null);
  return apiResponse;
}

async function rejectPaymentRequest(id) {
  const apiResponse = await apiRequest('GET', `/recurring-contract/reject-payment/${id}`, '', null);
  return apiResponse;
}

async function activateSubscription(id) {
  const apiResponse = await apiRequest('GET', `/recurring-contract/activate/${id}`, '', null);
  return apiResponse;
}

async function deactivateSubscription(id) {
  const apiResponse = await apiRequest('GET', `/recurring-contract/deactivate/${id}`, '', null);
  return apiResponse;
}

module.exports = { 
  listAllContracts, 
  createContract, 
  requestPayment,
  getSubscriptions,
  getListOfPaymentRequests,
  approvePaymentRequest,
  rejectPaymentRequest,
  activateSubscription,
  deactivateSubscription,
};
