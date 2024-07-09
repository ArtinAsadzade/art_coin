import { useState } from "react";
import { ranksData } from "./data/Data";

export const findRank = (tokens) => {
  const [ranks] = useState(ranksData);

  for (let rank of ranks) {
    if (tokens >= rank.start && tokens <= rank.end) {
      return rank.title;
    }
  }
  return null;
};

export const findUserEmail = (email, users) => {
  const user = users.find((user) => user.email === email);
  return user ? user.email : "";
};

export const findUserCode = (code, users) => {
  const user = users.find((user) => user.code === code);
  return user ? user.code : "";
};

export const getPinAsNumber = (pin) => {
  const pinString = pin.join("");

  return pinString;
};
