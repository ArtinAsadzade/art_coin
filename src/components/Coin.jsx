import { useCallback, useContext } from "react";
import { UserTokensContext } from "../context/UserTokensContext";
import { decrypted, encrypted } from "../utils";

export default function Coin() {
  const { setTokens } = useContext(UserTokensContext);
  const decryptedData = decrypted("user");

  console.log(decryptedData);

  const handleClick = useCallback(
    (e) => {
      const image = e.currentTarget;

      setTokens((prevTokens) => {
        const newTokens = prevTokens + 1;
        if (decryptedData.email) {
          encrypted({ ...decryptedData, tokens: newTokens }, "user");
        }
        return newTokens;
      });

      image.classList.add("animate-shake");
      setTimeout(() => {
        image.classList.remove("animate-shake");
      }, 100);
    },
    [decryptedData, setTokens]
  );

  return (
    <div className="w-full flex justify-center p-10 items-center">
      <img src="/logo.webp" className="rounded-full cursor-pointer shadow-2xl" alt="Art Coin Logo" onClick={handleClick} />
    </div>
  );
}
