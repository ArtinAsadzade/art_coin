import { useContext } from "react";
import { UserAllDataContext } from "../../context/UserAllDataContext";
import AccountInfo from "./_components/AccountInfo";

export default function Info() {
  const { user } = useContext(UserAllDataContext);

  return (
    <div className="w-full h-svh flex flex-col">
      <div className="flex-1 flex flex-col gap-5 items-center px-3 relative bg-primary pb-[100px]">
        <AccountInfo user={user} />
      </div>
    </div>
  );
}
