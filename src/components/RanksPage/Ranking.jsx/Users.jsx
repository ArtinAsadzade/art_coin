import { UsersIcon } from "@heroicons/react/24/outline";
import { formatNumber } from "../../../utils";

export default function Users({ props, index }) {
  console.log(props);
  return (
    <div className="w-full flex justify-between bg-secondary text-primary px-3 py-1 rounded-lg items-center">
      <div className="flex flex-col items-start font-extrabold">
        <div className="flex items-center gap-2">
          <h3>{props.name ? props.name : "user_" + props._id.slice(0, 7)}</h3>
          {/* {props.email === email && <div className="bg-primary text-secondary px-[4px] py-[2px] text-[10px] rounded-md flex items-center">YOU</div>} */}
        </div>
        <div className="font-bold flex items-center gap-2">
          <div className="flex items-center gap-1">
            <p className="text-[16px]">${formatNumber(props.coins)}</p>
            <img src="/logo.webp" className="w-[19px] h-[19px] object-cover" alt="Art Coin Logo" />
          </div>
          |
          <div className="flex items-center gap-1">
            <p className="text-[16px]">{formatNumber(props.invitedUsers.length)}</p>
            <UsersIcon className="w-[18px]" />
          </div>
        </div>
      </div>
      <p className="font-bold text-xl">{index + 1} </p>
    </div>
  );
}
