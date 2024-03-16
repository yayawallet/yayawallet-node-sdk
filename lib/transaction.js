const apiRequest = require('./apiRequest');

async function getTransactionListByUser() { 
  const apiResponse = await apiRequest("GET", "/transaction/find-by-user", "?p=1", null)
  return apiResponse;
}

async function createTransaction(receiver, amount, cause, meta_data) { 
  // {\n\t\"receiver\": \"************\",\n\t\"amount\": 5000,\n\t\"cause\": \"\",\n\t\"meta_data\": []\n}
  const apiResponse = await apiRequest("POST", "/transaction/create", "", {receiver, amount, cause, meta_data})
  return apiResponse;
}

async function transactionFee(receiver, amount) { 
  // {\n\t\"receiver\":\"************\",\n\t\"amount\":1000\n}
  const apiResponse = await apiRequest("POST", "/transaction/fee", "", {receiver, amount})
  return apiResponse;
}

async function generateQrUrl(amount, cause) { 
  // {\n\t\"amount\": \"61.96\",\n\t\"cause\": \"test1\"\n}
  const apiResponse = await apiRequest("POST", "/transaction/qr-generate", "", {amount, cause})
  return apiResponse;
}

async function getTransactionById(id) { 
  const apiResponse = await apiRequest("GET", `/transaction/${id}`, "", null)
  return apiResponse;
}

async function searchTransaction(query) { 
  // {\n\t\"query\": \"*******\"\n}
  const apiResponse = await apiRequest("POST", "/transaction/search", "", {query})
  return apiResponse;
}

module.exports = { getTransactionListByUser, createTransaction, transactionFee, generateQrUrl, getTransactionById, searchTransaction }