const fetch = require("node-fetch");

const baseUrl = "https://sandbox.yayawallet.com";

async function getQRCodeUrl(data) {  
  const url = `${baseUrl}/api/en/transaction/qr-generate`

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  const apiResponse = await response.json();
  if (response.status !== 200) {
    throw new Error(JSON.stringify({ ...apiResponse }));
  }

  return apiResponse.url;
}

module.exports = getQRCodeUrl;