const fetch = require("node-fetch");
const getTime = require('./time');
const generateSignature = require('./generateSignature');
  
async function apiRequest(method, path, body){  
  const url = `${process.env.API_URL}${path}`
  const path = `${process.env.API_PATH}${path}`

  const unixTimeResponse = await getTime();
  const unixTime = unixTimeResponse.time;
  const jsonBody = JSON.stringify(body);
  const signedPayload = generateSignature(unixTime, method, path, jsonBody);

  const response = await fetch(url, 
    method === "POST"? {
        method,
        headers: {
        "Content-Type": "application/json",
        "YAYA-API-KEY": process.env.API_KEY,
        "YAYA-API-TIMESTAMP": unixTime,
        "YAYA-API-SIGN": signedPayload,
        },
        body: jsonBody,
    }:
    {
        method,
        headers: {
        "Content-Type": "application/json",
        "YAYA-API-KEY": process.env.API_KEY,
        "YAYA-API-TIMESTAMP": unixTime,
        "YAYA-API-SIGN": signedPayload,
        },
    });

  const apiResponse = await response.json();
  if (response.status !== 200 || response.status !== 201) {
    throw new Error(JSON.stringify({ ...apiResponse }));
  }
}

module.exports = apiRequest;