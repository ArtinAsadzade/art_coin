import { useCallback, useContext } from "react";
import { UserAllDataContext } from "../../../context/UserAllDataContext";
import CustomBtn from "../../../helper/CustomBtn";
import { levelData } from "../../../data/Data";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import useFetch from "../../../hooks/useFetch";
import { decrypted } from "../../../utils";
import axios from "axios";

export default function BoostComponent({ getUserAccountHandler }) {
  const { user, setUser } = useContext(UserAllDataContext);
  const { loading, setLoading } = useFetch();

  const token = decrypted("token");

  const nowLevel = levelData.find((lvl) => lvl.level === user?.level);
  const nextLevel = levelData.find((lvl) => lvl.level === user?.level + 1);

  const progressInvites = Math.min((user?.invitedUsers?.length || 0) / (nextLevel?.requiredInvites || 1), 1);
  const progressCoins = Math.min((user?.coins || 0) / (nextLevel?.requiredCoins || 1), 1);

  const canUpgrade =
    (nextLevel?.requiredInvites == null || (user?.invitedUsers?.length || 0) >= nextLevel.requiredInvites) &&
    (nextLevel?.requiredCoins == null || (user?.coins || 0) >= nextLevel.requiredCoins);

  const updateUserHandler = useCallback(() => {
    setLoading(true);
    axios
      .put(`${import.meta.env.VITE_API}api/users/`, { email: token, level: user?.level + 1 }, { headers: { Authorization: token } })
      .then((res) => {
        res && setLoading(false);
        res && window.location.reload();
      })
      .catch((err) => {
        err && setLoading(false);
      });
  }, [setLoading, token]);

  return (
    <div className="w-full mx-auto flex-1 flex flex-col items-center justify-between gap-6 px-4 pt-20">
      <div className="flex flex-col items-center gap-2">
        <div className="w-[100px] h-[100px] bg-gradient-to-br from-secondary to-primary text-white rounded-full flex justify-center items-center font-extrabold text-5xl shadow-lg">
          {user?.level}
        </div>
        <p className="text-muted-foreground text-sm font-bold text-secondary">Current Level</p>
      </div>
      <div className="mt-6 w-full space-y-4 bg-secondary/80 p-2 rounded-md">
        <h2 className="font-bold text-white text-xl">For Next Level:</h2>
        <div>
          <p className="text-sm text-left text-muted-foreground text-white font-semibold">
            Invites ({user?.invitedUsers?.length}/{nextLevel?.requiredInvites})
          </p>
          <div className="w-full h-3 bg-primary/80 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressInvites * 100}%` }} />
          </div>
        </div>

        <div>
          <p className="text-sm text-left text-muted-foreground text-white font-semibold">
            Coins ({user?.coins}/{nextLevel?.requiredCoins})
          </p>
          <div className="w-full h-3 bg-primary/80 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressCoins * 100}%` }} />
          </div>
        </div>
      </div>
      <CustomBtn
        className={`w-full mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-lg font-semibold text-white transition-all duration-200 bg-gradient-to-r shadow-lg from-primary to-secondary hover:opacity-90`}
        disable={canUpgrade}
        onClick={updateUserHandler}
        loading={loading}
      >
        <ArrowUpCircleIcon className="w-5 h-5" />
        UPGRADE TO LEVEL {user?.level + 1}
      </CustomBtn>
    </div>
  );
}
