import { useCallback, useContext } from "react";
import { UserAllDataContext } from "../context/UserAllDataContext";

export default function Coin() {
  const { setTokens, setTokenLimit, tokenLimit, perTap } = useContext(UserAllDataContext);

  const handleClick = useCallback(
    (e) => {
      const image = e.currentTarget;
      const { clientX, clientY } = e;

      if (tokenLimit > 0) {
        setTokens((prevTokens) => prevTokens + perTap);
        setTokenLimit((prev) => prev - perTap);

        const numberElement = document.createElement("div");
        numberElement.className = "absolute text-4xl font-bold select-none text-secondary text-shadow animate-move-up";
        numberElement.textContent = `+${perTap}`;
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
    [setTokenLimit, setTokens, tokenLimit]
  );

  return (
    <div className="w-full flex justify-center px-10 py-5 items-center">
      <img src="/logo.webp" className="max-w-72 rounded-full cursor-pointer shadow-2xl" alt="Art Coin Logo" onClick={handleClick} />
    </div>
  );
}
