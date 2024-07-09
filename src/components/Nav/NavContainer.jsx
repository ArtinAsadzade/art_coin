import NavItems from "./NavItems";
import { useState } from "react";
import { navData } from "../../data/Data";
import { FireIcon } from "@heroicons/react/24/outline";

export default function NavContainer() {
  const [navItems] = useState(navData);
  return (
    <div className="font-bold w-11/12 rounded-xl absolute bottom-5 gap-8 flex flex-col items-center">
      <div className="flex w-full justify-center items-center gap-1">
        <FireIcon className="w-7 text-secondary font-bold text-lg" />

        <div className="p-1 rounded-lg w-4/5 max-h-4 bg-secondary">
          <div className="py-1 bg-primary rounded-xl w-[50%]"></div>
        </div>
        <p className="text-secondary mb-1 font-bold text-xl">50%</p>
      </div>
      <div className="flex flex-1 justify-center gap-2">
        {navItems.map((item) => (
          <NavItems {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
