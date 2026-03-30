import CryptoJS from "crypto-js";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.KEY || "secureKey#123";

function encrypt(str) {
  return CryptoJS.AES.encrypt(str, SECRET_KEY).toString();
}

function decrypt(str) {
  return CryptoJS.AES.decrypt(str, SECRET_KEY).toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt };
