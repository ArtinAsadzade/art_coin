import { useContext } from "react";
import { IsMobileViewContext } from "../context/IsMobileViewContext";
import { Navigate } from "react-router-dom";
import { UserTokensContext } from "../context/UserTokensContext";
import { useTapBilakhCoin } from "../utils";

export default function ComingSoon() {
  const { isMobile } = useContext(IsMobileViewContext);
  const { tokens } = useContext(UserTokensContext);
  const tapBilakhCoin = useTapBilakhCoin();

  return (
    <>
      {isMobile ? (
        <div className="w-full h-svh flex flex-col items-center p-5 bg-primary relative select-none">
          <div className="bg-secondary py-2 w-1/2 text-center rounded-lg mt-10 text-2xl text-primary font-bold flex justify-between px-5">
            <p>{tokens}</p>
            <p>Bilakh</p>
          </div>
          <div className="w-full flex justify-center p-5 items-center">
            <img src="/logo.png" className="rounded-full cursor-pointer" alt="Bilakh Coin Logo" onClick={tapBilakhCoin} />
          </div>
          <div className="font-bold text-secondary">
            <h1 className="text-2xl">Bilakh Coin Coming Soon!</h1>
            <p>
              Exciting news! Bilakh Coin is launching soon – a fun and engaging airdrop project where you can win Bilakh Coins and enjoy unique
              opportunities.
            </p>
          </div>
          <div className="absolute bottom-0 bg-secondary w-full p-2 text-primary font-bold text-center">Owned By Artin</div>
        </div>
      ) : (
        <Navigate to={"/JustMobileView"} />
      )}
    </>
  );
}
