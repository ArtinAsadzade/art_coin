import { formatNumber } from "../../../utils";

export default function TaskItem({ item, className }) {
  return (
    <div key={item.id} className={`w-11/12 bg-secondary text-primary flex-shrink-0 py-5 px-3 rounded-xl flex flex-col gap-5 ${className}`}>
      <div className="">
        <h3 className="font-extrabold text-xl">{item.title}</h3>
        <p className="font-bold">{item.description}</p>
      </div>
      <div className="w-full flex items-center justify-between font-[600]">
        <button className="bg-primary text-secondary py-1 px-2 rounded-md line-clamp-1">START</button>
        <p className="font-extrabold text-xl">{formatNumber(item.reward)}</p>
      </div>
    </div>
  );
}
