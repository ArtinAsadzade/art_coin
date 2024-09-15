import { ranksData } from "./data/Data";
import CryptoJS from "crypto-js";
import sha256 from "crypto-js/sha256";

export const encrypted = (data, key) => {
  const jsonData = JSON.stringify(data);
  const hash = sha256(jsonData).toString();
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify({ data: jsonData, hash }), import.meta.env.VITE_SECRET_KEY).toString();
  localStorage.setItem(key, encryptedData);
};

export const decrypted = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_SECRET_KEY);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      const dataHash = sha256(decryptedData.data).toString();
      if (dataHash !== decryptedData.hash) {
        throw new Error("Data integrity check failed");
      }

      return JSON.parse(decryptedData.data);
    } catch (error) {
      console.error("Error decrypting data:", error);
      localStorage.clear();
      location.reload();
      return "";
    }
  } else {
    return "";
  }
};

export const findRank = (tokens) => {
  const reversedRanks = [...ranksData].reverse();
  return reversedRanks.find((rank) => rank.start <= +tokens);
};

export const findUserHandler = (email, code, users) => {
  const user = users.find((user) => user.email === email && user.code === code);
  return user ? user : "";
};

export const getPinAsNumber = (pin) => {
  const pinString = pin.join("");

  return pinString;
};

export const logOutHandler = () => {
  localStorage.clear();
  setTimeout(() => {
    location.reload();
  }, 1000);
};

export const formatNumber = (number) => {
  if (number) {
    if (+number >= 1e12) {
      return `${Math.floor(+number / 1e12)}.${Math.floor((+number % 1e12) / 1e9)}t`;
    } else if (+number >= 1e9) {
      return `${Math.floor(+number / 1e9)}.${Math.floor((+number % 1e9) / 1e6)}b`;
    } else if (+number >= 1e6) {
      return `${Math.floor(+number / 1e6)}.${Math.floor((+number % 1e6) / 1e3)}m`;
    } else if (+number >= 1e3) {
      return `${Math.floor(+number / 1e3)}.${Math.floor(+number % 1e3)}k`;
    } else {
      return number.toString();
    }
  }
};

export const nameTranslator = (input) => {
  const atIndex = input.indexOf("@");
  if (atIndex !== -1) {
    return input.substring(0, atIndex);
  }
  return input;
};

export const getGregorianDateFromISO = (isoDateString) => {
  const date = new Date(isoDateString);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
