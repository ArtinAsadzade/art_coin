import NavItems from "./NavItems";
import { useState } from "react";
import { navData } from "../../data/Data";

export default function NavContainer() {
  const [navItems] = useState(navData);
  return (
    <div className="font-bold w-full gap-8 flex flex-col items-center fixed bottom-0 px-3 bg-primary p-1 z-30 max-w-[560px]">
      <div className="w-full flex justify-center gap-2">
        {navItems.map((item) => (
          <NavItems {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
