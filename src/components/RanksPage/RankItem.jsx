import { formatNumber } from "../../utils";

export default function RankItem(props) {
  return (
    <div className="flex flex-col items-center gap-2 mx-4 font-bold text-secondary py-5 text-2xl">
      <h1>{props.title} Legue</h1>
      <img src={props.src} alt={`${props.title} Rank Picture`} className="w-[400px] h-[300px] object-cover" />
      <p>From {formatNumber(props.start)}</p>
    </div>
  );
}
