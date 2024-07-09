import NavItems from "./NavItems";
import { useState } from "react";
import { navData } from "../../data/Data";
import StatusBar from "./StatusBar";

export default function NavContainer() {
  const [navItems] = useState(navData);
  return (
    <div className="font-bold w-11/12 rounded-xl absolute bottom-5 gap-8 flex flex-col items-center">
      <StatusBar />
      <div className="flex flex-1 justify-center gap-2">
        {navItems.map((item) => (
          <NavItems {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
