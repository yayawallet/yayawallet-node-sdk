const fetch = require('node-fetch');
const { getTime } = require('./time');
const { generateSignature } = require('./generateSignature');
require('dotenv').config();

async function apiRequest(method, path, params, body) {
  const url = `${process.env.API_URL}${path}${params}`;
  const apiPath = `${process.env.API_PATH}${path}`;

  const unixTimeResponse = await getTime();
  const unixTime = unixTimeResponse.time;
  const jsonBody = body? JSON.stringify(body): "";
  const signedPayload = generateSignature(unixTime, method, apiPath, jsonBody);

  console.log(url, method, process.env.API_KEY, unixTime, signedPayload)

  const headers = {
    'Content-Type': 'application/json',
    'YAYA-API-KEY': process.env.API_KEY,
    'YAYA-API-TIMESTAMP': unixTime,
    'YAYA-API-SIGN': signedPayload
  };

  const response = await fetch(
    url,
    method === 'POST'
      ? {
          method,
          headers,
          body: jsonBody
        }
      : {
          method,
          headers
        }
  );

  const apiResponse = await response.json();
  if (response.status !== 200 && response.status !== 201) {
    throw new Error(JSON.stringify({ ...apiResponse }));
  }

  return apiResponse;
}

module.exports = { apiRequest };
