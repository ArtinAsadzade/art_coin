import { useCallback } from "react";
import { Link } from "react-router-dom";
import { home_url, login_url } from "../router/Urls";
import { decrypted, nameTranslator } from "../utils";

export default function ComingSoon() {
  const token = decrypted("token");
  const handleClick = useCallback((e) => {
    const image = e.currentTarget;

    image.classList.add("animate-shake");
    setTimeout(() => {
      image.classList.remove("animate-shake");
    }, 100);
  }, []);

  return (
    <div className="w-full h-svh flex flex-col">
      <div className="flex-1 flex flex-col gap-5 items-center justify-evenly p-5 bg-primary relative select-none">
        <div className="w-full flex justify-center px-10 py-5 items-center" onClick={handleClick}>
          <img src="/logo.webp" className="max-w-72 rounded-full cursor-pointer shadow-2xl" alt="Art Coin Logo" />
        </div>
        <div className="font-bold text-secondary">
          <h1 className="text-2xl">Art Coin Coming Soon!</h1>
          <p>
            Exciting news! Art Coin is launching soon – a fun and engaging airdrop project where you can win Art Coins and enjoy unique opportunities.
          </p>
        </div>
        {token ? (
          <Link to={home_url} className="w-full bg-secondary rounded-lg p-3 text-primary font-bold flex items-center justify-center gap-2">
            Welcome <span className="border-b border-primary uppercase">{nameTranslator(token)}</span>
          </Link>
        ) : (
          <Link to={login_url} className="w-full bg-secondary rounded-lg p-3 text-primary font-bold text-center cursor-pointer">
            Now Create Account
          </Link>
        )}
      </div>
    </div>
  );
}
