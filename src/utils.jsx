import { useState } from "react";
import { ranksData } from "./data/Data";
import CryptoJS from "crypto-js";

export const encrypted = (data, key) => {
  const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), import.meta.env.VITE_SECRET_KEY).toString();
  localStorage.setItem(key, encryptedData);
};

export const decrypted = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, import.meta.env.VITE_SECRET_KEY);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch (error) {
      localStorage.clear();
      location.reload();
      return "";
    }
  } else return "";
};

export const findRank = (tokens) => {
  return ranksData.find((rank) => rank.start <= +tokens);
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
