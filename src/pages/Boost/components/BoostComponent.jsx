import { FireIcon } from "@heroicons/react/24/outline";

export default function BoostComponent() {
  return (
    <div className="w-full flex flex-col gap-4 py-4">
      <h2 className="flex items-center text-secondary gap-1 font-extrabold text-xl">
        Upgrades <FireIcon className="w-8" />
      </h2>
      <div className="bg-secondary p-3 text-center font-bold text-xl rounded-lg text-primary">
        <p>No Upgrade available</p>
      </div>
    </div>
  );
}
