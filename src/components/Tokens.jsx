import { useContext } from "react";
import Rank from "./Rank";
import { formatNumber } from "../utils";
import { UserAllTokensContext } from "../context/UserAllTokensContext";

export default function Tokens() {
  const { allTokens } = useContext(UserAllTokensContext);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="py-2 text-center rounded-lg text-5xl text-secondary font-bold flex items-center justify-center gap-3">
        <img className="w-[50px] mt-2 object-cover" src="/logo.webp" alt="" />
        <p>{formatNumber(allTokens)}</p>
      </div>
      <Rank tokens={allTokens} />
    </div>
  );
}
