import { FireIcon } from "@heroicons/react/24/outline";
import { formatNumber } from "../../../utils";

export default function HotTasks({ data }) {
  console.log(data);
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <h2 className="flex items-center text-secondary gap-1 font-extrabold">
          Hot Tasks <FireIcon className="w-8" />
        </h2>
        <div className="flex items-center w-full gap-3 flex-shrink-0 overflow-x-auto px-3">
          {data?.missions?.slice(0, 3).map((item) => (
            <div key={item.id} className="w-11/12 bg-secondary text-primary flex-shrink-0 p-2 rounded-xl flex flex-col gap-5">
              <div className="">
                <h3 className="font-extrabold">{item.title}</h3>
                <p className="font-bold">{item.description}</p>
              </div>
              <div className="w-full flex items-center justify-between px-3 font-[600]">
                <button className="bg-primary text-secondary py-1 px-2 rounded-md">START</button>
                <p className="font-extrabold">{formatNumber(item.reward)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
