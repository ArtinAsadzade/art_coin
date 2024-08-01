import NavItems from "./NavItems";
import { useState } from "react";
import { navData } from "../../data/Data";

export default function NavContainer() {
  const [navItems] = useState(navData);
  return (
    <div className="font-bold w-full rounded-xl gap-8 flex flex-col items-center">
      <div className="w-full flex justify-center gap-2">
        {navItems.map((item) => (
          <NavItems {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
