import { useContext } from "react";
import Rank from "./Rank";
import { UserTokensContext } from "../context/UserTokensContext";
import { formatNumber } from "../utils";

export default function Tokens() {
  const { tokens } = useContext(UserTokensContext);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-2 text-center rounded-lg text-5xl text-secondary font-bold flex items-center justify-center gap-3">
        <img className="w-[50px] mt-3 object-cover" src="/logo.webp" alt="" />
        <p>{formatNumber(tokens)}</p>
      </div>
      <Rank tokens={tokens} />
    </div>
  );
}
