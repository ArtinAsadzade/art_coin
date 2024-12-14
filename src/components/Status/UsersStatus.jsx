import { formatNumber } from "../../utils";

export default function UsersStatus({ data }) {
  return (
    <div className="w-full flex flex-col gap-3 text-secondary font-bold text-center">
      <div className="w-full flex gap-2 flex-col">
        <div className="w-full flex gap-2 justify-evenly items-center">
          <div className="w-full bg-secondary text-primary p-2 rounded-md">
            <p className="text-lg">All Users:</p>
            <h2 className="text-2xl">{formatNumber(data?.totalUsers)}</h2>
          </div>
          <div className="w-full bg-secondary text-primary p-2 rounded-md">
            <p className="text-lg">Online Users:</p>
            <h2 className="text-2xl">{formatNumber(data?.onlineUsers)}</h2>
          </div>
        </div>
        <div className="bg-secondary text-primary p-2 rounded-md">
          <p className="text-lg">Mined Coins:</p>
          <div className="flex items-center justify-center gap-1">
            <img src="/logo.webp" className="w-[25px] h-[25px] mt-1 object-cover" alt="Art Coin Logo" />
            <h2 className="text-2xl">{formatNumber(data?.totalCoins)}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
