import { useContext } from "react";
import { UserAllDataContext } from "../context/UserAllDataContext";
import Rank from "./Rank";
import { Link } from "react-router-dom";
import { ranks_url } from "../router/Urls";
import { levelData } from "../data/Data";

export default function StatusBar() {
  const { allTokens, tokenLimit, level } = useContext(UserAllDataContext);
    const levelinfo = levelData.find(lvl => lvl.level === level)
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between gap-2">
        <div className="w-full bg-secondary rounded-md p-2 flex justify-between font-bold text-primary">
          Taps Left: <span>{tokenLimit.toLocaleString("EN")}</span>
        </div>
        <div className="w-full bg-secondary rounded-md p-2 flex justify-between font-bold text-primary">
          Per Tap:
          <span>{levelinfo?.perTap.toLocaleString("EN")}</span>
        </div>
      </div>
      <Link to={ranks_url} className="w-full bg-secondary rounded-md p-2 flex justify-center gap-2 font-bold text-primary">
        {/* Rank: */}
        <Rank tokens={allTokens} />
      </Link>
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
