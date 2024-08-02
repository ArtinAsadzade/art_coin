import { findRank } from "../utils";

export default function Rank({ tokens }) {
  const rank = findRank(tokens);
  return <div>{rank.title}</div>;
}
