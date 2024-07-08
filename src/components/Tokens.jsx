import { useContext } from "react";
import Rank from "./Rank";
import { UserTokensContext } from "../context/UserTokensContext";

export default function Tokens() {
  const { tokens } = useContext(UserTokensContext);
  return (
    <>
      <div className="bg-secondary py-2 w-1/2 text-center rounded-lg mt-10 text-2xl text-primary font-bold flex justify-between px-5">
        <p>{tokens}</p>
        <p>Coin</p>
      </div>
      <Rank tokens={tokens} />
    </>
  );
}
