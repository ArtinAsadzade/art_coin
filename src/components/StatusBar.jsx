import { useContext } from "react";
import { UserAllDataContext } from "../context/UserAllDataContext";
import Rank from "./Rank";

export default function StatusBar() {
  const { allTokens, tokenLimit } = useContext(UserAllDataContext);
  return (
    <div className="w-full flex justify-between gap-2">
      <div className="w-full bg-secondary rounded-md p-2 flex justify-between font-bold text-primary">
        Taps Left: <span>{tokenLimit}</span>
      </div>
      <div className="w-full bg-secondary rounded-md p-2 flex justify-between font-bold text-primary">
        Rank:
        <Rank tokens={allTokens} />
      </div>
    </div>
    // <div className="flex w-full justify-center items-center gap-1">
    //   <FireIcon className="w-7 text-secondary font-bold text-lg" />

    //   <div className="p-1 rounded-lg w-full max-h-4 bg-secondary">
    //     <div className="py-1 bg-primary rounded-xl w-[50%]"></div>
    //   </div>
    //   <p className="text-secondary mb-1 font-bold text-xl">50%</p>
    // </div>
  );
}
