import { useContext } from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";
import Footer from "../components/Footer";
import { UserTokensContext } from "../context/UserTokensContext";

export default function ComingSoon() {
  const { tokens } = useContext(UserTokensContext);

  return (
    <>
      <div className="w-full h-svh flex flex-col items-center justify-between p-5 bg-primary relative select-none">
        <div className="bg-secondary py-2 w-1/2 text-center rounded-lg mt-10 text-2xl text-primary font-bold flex justify-between px-5">
          <p>{tokens}</p>
          <p>Coin</p>
        </div>
        <Coin />
        <div className="font-bold text-secondary">
          <h1 className="text-2xl">Art Coin Coming Soon!</h1>
          <p>
            Exciting news! Art Coin is launching soon – a fun and engaging airdrop project where you can win Art Coins and enjoy unique opportunities.
          </p>
        </div>
        <Link to={"/login"} className="w-full bg-secondary rounded-lg p-3 text-primary font-bold text-center cursor-pointer mb-10">
          what is happening?
        </Link>
        <Footer />
      </div>
    </>
  );
}
