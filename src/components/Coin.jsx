import { useCallback, useContext } from "react";
import { UserAllDataContext } from "../context/UserAllDataContext";
import { levelData } from "../data/Data";

export default function Coin() {
  const { setTokens, setTokenLimit, tokenLimit, level } = useContext(UserAllDataContext);
  
    const levelinfo = levelData.find(lvl => lvl.level === level)

  const handleClick = useCallback(
    (e) => {
      const image = e.currentTarget;
      const { clientX, clientY } = e;

      if (tokenLimit > 0 && levelinfo?.perTap <= tokenLimit) {
        setTokens((prevTokens) => prevTokens + levelinfo?.perTap);
        setTokenLimit((prev) => prev - levelinfo?.perTap);

        const numberElement = document.createElement("div");
        numberElement.className = "absolute text-4xl font-bold   text-secondary text-shadow animate-move-up";
        numberElement.textContent = `+${levelinfo?.perTap}`;
        numberElement.style.left = `${clientX + 10}px`;
        numberElement.style.top = `${clientY - 20}px`;

        document.body.appendChild(numberElement);

        numberElement.addEventListener("animationend", () => {
          numberElement.remove();
        });
      }

      image.classList.add("animate-shake");
      setTimeout(() => {
        image.classList.remove("animate-shake");
      }, 100);
    },
    [levelinfo?.perTap, setTokenLimit, setTokens, tokenLimit]
  );

  return (
    <div className="w-full max-w-72 flex justify-center items-center rounded-full cursor-pointer" onClick={handleClick}>
      <img src="/logo.webp" className="max-w-72 rounded-full shadow-2xl" alt="Art Coin Logo" />
    </div>
  );
}
