# YaYa Wallet Node SDK

This Node.js SDK provides integration with YaYa Wallet API, allowing developers to interact with the YaYa Wallet platform programmatically.

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

## API Documentation

For detailed documentation on the SDK's methods and usage, please refer to the [YaYa Wallet API Documentation](https://github.com/yayawallet/yayawallet-node-sdk#readme).

## Issues

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub Issues](https://github.com/yayawallet/yayawallet-node-sdk/issues) page.

## License

This SDK is licensed under the ISC License.

**Note**: This SDK requires Node.js version 12.x or higher.
