import { useContext, useEffect, useState } from "react";
import { formatNumber } from "../../../utils";
import { UserAllDataContext } from "../../../context/UserAllDataContext";

export default function RankItem({ props, userRank }) {
  const { allTokens } = useContext(UserAllDataContext);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent((userRank.end / allTokens) * 100);
  }, [allTokens, userRank.end]);

  console.log(percent);
  console.log(userRank.end / allTokens);

  return (
    <div className="flex flex-col items-center gap-2 mx-4 font-bold text-secondary py-5 text-2xl">
      <h1>{props.title} League</h1>
      <img src={props.src} alt={`${props.title} Rank Picture`} className="w-[400px] h-[300px] object-cover" />
      {+props.start === +userRank.start ? <p>Next Rank {formatNumber(userRank.end - allTokens)}</p> : <p>From {formatNumber(props.start)}</p>}
    </div>
  );
}
