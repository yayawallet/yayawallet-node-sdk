const fetch = require("node-fetch");
const crypto = require('crypto');

const baseUrl = "https://yayawallet.com/api/en";

async function getTime(){
  const url = `${baseUrl}/time`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });

  const unixResponse = await response.json();
  return unixResponse.time;
}

function generateSignature(timestamp, method, endpoint, body, apiSecret) {
  const preHashString = `${timestamp}${method}${endpoint}${body}`;
  const hmac = crypto.createHmac("sha256", apiSecret);
  hmac.update(preHashString);
  return Buffer.from(hmac.digest()).toString("base64");
}

async function getQRCodeUrl(apiSecret, apiKey, amount) {  
  const url = `${baseUrl}/transaction/qr-generate`
  const path = "/api/en/transaction/qr-generate"
  const method = "POST"

  const unixTime = await getTime();
  const body = { amount };
  const jsonBody = JSON.stringify(body);
  const signedPayload = generateSignature(unixTime, method, path, jsonBody, apiSecret);

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "YAYA-API-KEY": apiKey,
      "YAYA-API-TIMESTAMP": unixTime,
      "YAYA-API-SIGN": signedPayload,
    },
    body: jsonBody,
  });

  const apiResponse = await response.json();
  if (response.status !== 200) {
    throw new Error(JSON.stringify({ ...apiResponse }));
  }

  return apiResponse.payment_link;
}

module.exports = getQRCodeUrl;