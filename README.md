# Yaya Wallet Node SDK

This Node.js SDK provides integration with Yaya Wallet API, allowing developers to interact with the Yaya Wallet platform programmatically.

## Installation

You can install the Yaya Wallet Node SDK via npm:

```bash
npm install @yayawallet/node-sdk
```

## Usage

To use the SDK in your Node.js application, require it as follows:

```bash
const yayaSdk = require('@yayawallet/node-sdk');
```

Then, you can start using the SDK's methods to interact with the Yaya Wallet API.

## Example

Here's a simple example demonstrating how to use the SDK to perform a basic operation:

```bash
const yayaSdk = require('@yayawallet/node-sdk');

// Initialize the SDK with your credentials
const yayaClient = new yayaSdk.YayaClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret'
});

// Example: Fetch user's wallet balance
yayaClient.getBalance('user-id')
  .then(balance => {
    console.log('User wallet balance:', balance);
  })
  .catch(error => {
    console.error('Error fetching wallet balance:', error);
  });
```

## API Documentation

For detailed documentation on the SDK's methods and usage, please refer to the [Yaya Wallet API Documentation](https://github.com/yayawallet/yayawallet-node-sdk#readme).

## Issues

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on the [GitHub Issues](https://github.com/yayawallet/yayawallet-node-sdk/issues) page.

## License

This SDK is licensed under the ISC License.

**Note**: This SDK requires Node.js version 12.x or higher.
