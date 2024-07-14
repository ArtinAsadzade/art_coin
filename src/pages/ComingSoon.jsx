import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";
import { UserTokensContext } from "../context/UserTokensContext";
import { decrypted, logOutHandler } from "../utils";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Toast from "../components/Toast";

export default function ComingSoon() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const decryptedData = decrypted("account");
  const { tokens } = useContext(UserTokensContext);

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

        <div className="bg-secondary py-2 w-1/2 text-center rounded-lg text-2xl text-primary font-bold flex items-center justify-between px-4">
          <p>{tokens}</p>
          <img className="w-7 h-7 object-cover" src="/logo.webp" alt="" />
        </div>
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
