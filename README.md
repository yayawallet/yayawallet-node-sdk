<img src="https://yayawallet.com/images/logo.svg" height="100px" />

**YaYa Wallet Node SDK** provides integration with YaYa Wallet API, allowing developers to interact with the YaYa Wallet platform programmatically.

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

## Getting Started with the YaYa Wallet SDK for Node.js

This guide will walk you through setting up and using the YaYa Wallet SDK in your Node.js application to interact with the YaYa Wallet API.

**1. Installation**

Before you begin, ensure you have Node.js and npm installed on your system. You can install the SDK via npm using the following command:

```bash
npm install @yayawallet/node-sdk
```

**2. Environment Setup**

**Secure Credentials with a .env File:**

1. Create a file named .env in the root directory of your project. This file will store your API credentials securely, separate from your code.

2. Add the following lines to the .env file, replacing the placeholders with your actual YaYa Wallet API credentials:

```bash
YAYA_API_URL=https://yayawallet.com/api/en
YAYA_API_PATH=/api/en
YAYA_API_KEY=your_yayawallet_api_key
YAYA_API_SECRET=your_yayawallet_api_secret
```

**Important**: Never commit your .env file to a version control system like Git, as it contains sensitive information.

**3. Using the SDK in Your Code**

Now that you have the SDK installed and your credentials set up, you can start using the SDK's functions to interact with the YaYa Wallet API.

**Import Required Functions:**

Import the specific functions you need from the `@yayawallet/node-sdk` module. Here's an example of importing the `getProfile` function:

```js
const { getProfile } = require('@yayawallet/node-sdk');
```

**Make API Calls:**

Once you've imported the functions, you can use them to make API calls. For instance, to retrieve a user's profile information:

```js
getProfile('username')
  .then((profile) => {
    console.log('User Profile:', profile);
  })
  .catch((error) => {
    console.error('Error fetching user profile:', error);
  });
```

**Note:** Replace 'username' with the actual username you want to retrieve information for.

This is a basic example, and the SDK offers various other functions for interacting with the YaYa Wallet API. Refer to the official SDK documentation for a complete list of [available functions](#api-documentation) and their usage details.

## SDK Documentation

List of all functions available in this sdk.

**User**

```js
getProfile();
searchUser(query); // query can be username, phone number, email
getOrganization();
```

**Transaction**

```js
getTransactionListByUser(params); // params = page number
createTransaction(receiver, amount, cause);
transactionFee(receiver, amount);
generateQrUrl(amount, cause);
getTransactionById(id); // id = transaction id
searchTransaction(query); // query = transactionid, username, phone number, email
```

**Transfer**

```js
getTransferList();
transferAsUser(institution_code, account_number, amount, ref_code, sender_note, phone);
externalAccountLookup(institution_code, account_number);
getTransferFee(institution_code, amount);
```

**Air Time**

```js
buyAirtime(phone, amount);
listRecharges();
```

**Saving**

```js
createSaving(amount, action);
withdrawSaving();
claim(request_ids);
```

**Recurring Contract**

```js
listAllContracts();
createContract(contract_number, service_type, customer_account_name, meta_data);
requestPayment(contract_number, amount, currency, cause, notification_url, meta_data);
getSubscriptions();
getListOfPaymentRequests();
approvePaymentRequest(id);
rejectPaymentRequest(id);
activateSubscription(id);
deactivateSubscription(id);
```

**EQub**

```js
createEqub(
  equb_account,
  title,
  description,
  location,
  latitude,
  longitude,
  period,
  amount,
  private
);
updateEqub(id, title, description, location, latitude, longitude, period, amount, private);
createNewRoundOfEqub(id);
equbPayments(id);
equbRoundsByID(id);
equbRoundsByName(name);
listOfEqubs();
findEqubsByUser();
findEqubByID(id);
findEqubByName(name);
payEqubRound(id, round, payment);
findMembersOfEqub(id);
removeMembersOfEqub(id);
joinEqub(id);
leaveEqub(id);
```

**Invitation**

```js
findByInviter();
createInvitation(country, phone, amount);
```

**Institution**

```js
listInstitution(country);
```

**verification**

```js
getVerifiedPaymentDetails(data, signature);
```

**Time**

```js
getTime();
```

**Generate Signature**

```js
generateSignature(timestamp, method, endpoint, body);
```

**API Request**

```js
apiRequest(method, path, params, body);
```

## Issues

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub Issues](https://github.com/yayawallet/yayawallet-node-sdk/issues) page.

## License

This SDK is licensed under the ISC License.

**Note**: This SDK requires Node.js version 20.x or higher.

[npm-downloads-image]: https://badgen.net/npm/dm/@yayawallet/node-sdk
[npm-downloads-url]: https://npmcharts.com/compare/@yayawallet/node-sdk?minimal=true
[npm-install-size-image]: https://badgen.net/packagephobia/install/@yayawallet/node-sdk
[npm-install-size-url]: https://packagephobia.com/result?p=@yayawallet/node-sdk
[npm-url]: https://npmjs.org/package/@yayawallet/node-sdk
[npm-version-image]: https://badgen.net/npm/v/@yayawallet/node-sdk
