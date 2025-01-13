## Environment Variables

This project requires the following environment variables:

-  `MONGO_URI`
-  `JWT_TOKEN`
- `ENCRYPTION_KEY`: A secret key used for encryption and decryption.

## Generating ENCRYPTION_KEY

To generate a secure `ENCRYPTION_KEY` using Node.js, you can use the built-in `crypto` module. Run `aes.js` to get the 32-byte token required for this operation. Set this key as the value of `ENCRYPTION_KEY` in your environment variables.
