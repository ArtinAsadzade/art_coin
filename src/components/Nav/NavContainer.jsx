import NavItems from "./NavItems";
import { useState } from "react";
import { navData } from "../../data/Data";

export default function NavContainer() {
  const [navItems] = useState(navData);
  return (
    <div className="font-bold w-11/12 rounded-xl absolute bottom-24 gap-2 flex items-center justify-between">
      {navItems.map((item) => (
        <NavItems {...item} key={item.id} />
      ))}
    </div>
  );
}
