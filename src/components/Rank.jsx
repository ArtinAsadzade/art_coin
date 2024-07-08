import { findRank } from "../utils";

export default function Rank({ tokens }) {
  const rank = findRank(tokens);

  console.log(rank);

  return (
    <div>
      <div className="">Silder</div>
    </div>
  );
}
