import { useContext } from "react";
import { UserTokensContext } from "../context/UserTokensContext";

export default function Coin() {
  const { setTokens } = useContext(UserTokensContext);

  const handleClick = (event) => {
    const image = event.currentTarget;

    setTokens((prevTokens) => {
      const newTokens = prevTokens + 1;
      localStorage.setItem("tokens", newTokens);
      return newTokens;
    });

    image.classList.add("animate-shake");
    setTimeout(() => {
      image.classList.remove("animate-shake");
    }, 100);
  };

  return (
    <div className="w-full flex justify-center p-10 items-center">
      <img src="/logo.png" className="rounded-full cursor-pointer shadow-2xl" alt="Bilakh Coin Logo" onClick={handleClick} />
    </div>
  );
}
