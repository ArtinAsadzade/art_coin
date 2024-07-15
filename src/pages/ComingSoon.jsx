import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";
import { UserTokensContext } from "../context/UserTokensContext";
import { decrypted, formatNumber, getUserData, logOutHandler } from "../utils";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Toast from "../components/Toast";
import Tokens from "../components/Tokens";

export default function ComingSoon() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const decryptedData = decrypted("account");

  return (
    <>
      <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} />
      <div className="w-full h-svh flex flex-col items-center justify-evenly p-5 bg-primary relative select-none">
        {decryptedData ? (
          <div className="absolute top-2 left-2">
            <ArrowLeftStartOnRectangleIcon className="w-8 text-secondary cursor-pointer" onClick={logOutHandler} />
          </div>
        ) : (
          <></>
        )}
        <Tokens />
        <Coin />
        <div className="font-bold text-secondary">
          <h1 className="text-2xl">Art Coin Coming Soon!</h1>
          <p>
            Exciting news! Art Coin is launching soon – a fun and engaging airdrop project where you can win Art Coins and enjoy unique opportunities.
          </p>
        </div>
        {decryptedData ? (
          <></>
        ) : (
          <Link to={"/login"} className="w-full bg-secondary rounded-lg p-3 text-primary font-bold text-center cursor-pointer mb-10">
            Login To Your account
          </Link>
        )}
      </div>
    </>
  );
}
