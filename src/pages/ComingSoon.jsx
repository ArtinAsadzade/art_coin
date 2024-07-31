import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Coin from "../components/Coin";
import { decrypted } from "../utils";
import Toast from "../components/Toast";
import Tokens from "../components/Tokens";
import { home_url } from "../router/Urls";

export default function ComingSoon() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const token = decrypted("token");
  return (
    <>
      <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} />
      {token ? (
        <Navigate to={home_url} />
      ) : (
        <div className="w-full h-svh flex flex-col gap-3 items-center justify-center p-5 bg-primary relative select-none">
          <Tokens />
          <Coin />
          <div className="font-bold text-secondary">
            <h1 className="text-2xl">Art Coin Coming Soon!</h1>
            <p>
              Exciting news! Art Coin is launching soon – a fun and engaging airdrop project where you can win Art Coins and enjoy unique
              opportunities.
            </p>
          </div>
          <Link to={"/login"} className="w-full bg-secondary rounded-lg p-3 text-primary font-bold text-center cursor-pointer mb-10">
            Login To Your account
          </Link>
        </div>
      )}
    </>
  );
}
