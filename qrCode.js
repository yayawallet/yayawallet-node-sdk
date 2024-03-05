const https = require('https');

async function getQRCodeUrl(data) {
  const postData = JSON.stringify({ yourData: data });

  const options = {
    hostname: 'sandbox.yayawallet.com',
    port: 443,
    path: '/api/en/transaction/qr-generate',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': postData.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            const responseObject = JSON.parse(responseBody);
            resolve(responseObject.url); // Assuming 'url' property exists in successful response
          } catch (error) {
            reject(new Error('Failed to parse response body'));
          }
        } else {
          reject(new Error(`Request failed with status code: ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

module.exports = getQRCodeUrl;