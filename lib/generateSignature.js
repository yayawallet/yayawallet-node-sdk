const crypto = require('crypto');

function generateSignature(timestamp, method, endpoint, body) {
    const preHashString = `${timestamp}${method}${endpoint}${body}`;
    const hmac = crypto.createHmac("sha256", process.env.API_SECRET);
    hmac.update(preHashString);
    return Buffer.from(hmac.digest()).toString("base64");
}

module.exports = generateSignature;