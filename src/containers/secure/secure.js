import { AES, enc } from "crypto-js";
const encryptionKey = "your-encryption-key";

export const encryptText = (text) => {
  return AES.encrypt(text, encryptionKey).toString();
};

export const decryptText = (encryptedText) => {
  const bytes = AES.decrypt(encryptedText, encryptionKey);
  return bytes.toString(enc.Utf8);
};
