import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { findRank } from "../utils";

export default function Rank({ tokens }) {
  const rank = findRank(tokens);
  return (
    <div className="flex items-center text-bold gap-1">
      {rank.title} <ArrowRightIcon className="w-5 font-bold mt-1" />
    </div>
  );
}
