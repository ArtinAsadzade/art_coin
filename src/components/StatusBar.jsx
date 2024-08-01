import { FireIcon } from "@heroicons/react/24/outline";

export default function StatusBar() {
  return (
    <div className="flex w-full justify-center items-center gap-1">
      <FireIcon className="w-7 text-secondary font-bold text-lg" />

      <div className="p-1 rounded-lg w-full max-h-4 bg-secondary">
        <div className="py-1 bg-primary rounded-xl w-[50%]"></div>
      </div>
      <p className="text-secondary mb-1 font-bold text-xl">50%</p>
    </div>
  );
}
