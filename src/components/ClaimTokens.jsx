import { useCallback, useContext, useState } from "react";
import { UserTokensContext } from "../context/UserTokensContext";
import { decrypted, formatNumber } from "../utils";
import axios from "axios";
import Toast from "./Toast";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { UserAllTokensContext } from "../context/UserAllTokensContext";

export default function ClaimTokens() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const { tokens, setTokens } = useContext(UserTokensContext);
  const { allTokens, setAllTokens } = useContext(UserAllTokensContext);
  const email = decrypted("token");

  const updateUserTokensHandler = useCallback(() => {
    if (tokens > 50) {
      axios
        .put(`${import.meta.env.VITE_API}api/users`, { email, coins: tokens + allTokens })
        .then((res) => {
          setTokens(0);
          setAllTokens(res.data.coins);
        })
        .catch((err) => {
          console.error("Error updating user tokens:", err);
        });
    } else {
      setToastData({
        icon: <XMarkIcon className="w-6 text-red-500" />,
        msg: "You need 50 coins to claim coins.",
        show: true,
      });
    }
  }, [email, setTokens, tokens]);

  return (
    <>
      <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} />
      <div className="w-full bg-secondary rounded-md flex items-center justify-between px-3 py-2">
        <div className="py-2 text-center rounded-lg text-2xl text-primary font-bold flex items-center justify-center gap-1">
          <img className="w-[30px] mt-1 object-cover" src="/logo.webp" alt="" />
          <p>{formatNumber(tokens)}</p>
        </div>
        <button className="bg-primary text-secondary font-bold w-1/3 rounded-md py-3" onClick={updateUserTokensHandler}>
          Claim
        </button>
      </div>
    </>
  );
}
