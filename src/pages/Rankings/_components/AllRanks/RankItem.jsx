import { useContext, useEffect, useState } from "react";
import { FireIcon } from "@heroicons/react/24/outline";
import { formatNumber } from "../../../../utils";
import { UserAllDataContext } from "../../../../context/UserAllDataContext";

export default function RankItem({ props, userRank }) {
  const { allTokens } = useContext(UserAllDataContext);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.ceil((allTokens / userRank.end) * 100));
  }, [allTokens, userRank.end]);

  return (
    <div className="flex flex-col items-center gap-2 mx-4 font-bold text-secondary py-5 text-2xl">
      <h1>{props.title} League</h1>
      <img src={props.src} alt={`${props.title} Rank Picture`} className="w-[400px] h-[300px] object-cover" />
      {+props.start === +userRank.start ? (
        <>
          <div className="flex w-full justify-center items-center gap-1">
            <FireIcon className="w-8 text-secondary font-bold text-[18px]" />

            <div className="p-1 rounded-lg w-full max-h-4 bg-secondary">
              <div className="py-1 bg-primary rounded-xl" style={{ width: percent + "%" }}></div>
            </div>
            <p className="text-secondary font-bold text-[18px]">{props.end === 0 ? "OMG" : percent + "%"}</p>
          </div>
          <p>{props.end === 0 ? "Your God" : formatNumber(allTokens) + " / " + formatNumber(userRank.end)}</p>
        </>
      ) : (
        <p>
          {allTokens > props.start ? (
            <div className="flex items-center gap-2">
              You Nailed It <FireIcon className="w-7 text-secondary font-bold text-[18px]" />
            </div>
          ) : (
            "From " + formatNumber(props.start)
          )}
        </p>
      )}
    </div>
  );
}
