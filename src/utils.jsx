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
