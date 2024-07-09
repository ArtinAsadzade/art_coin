import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { findRank } from "../utils";

export default function Rank({ tokens }) {
  const rank = findRank(tokens);
  console.log(rank);

  return (
    <div className={`text-secondary font-bold flex items-center gap-2 my-3 cursor-pointer`}>
      {rank.title} <ChevronRightIcon className="w-5" />
    </div>
  );
}
