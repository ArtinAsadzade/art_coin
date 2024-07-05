import { useContext } from "react";
import { UserTokensContext } from "./context/UserTokensContext";

export const useTapBilakhCoin = () => {
  const { setTokens } = useContext(UserTokensContext);

  const tapBilakhCoin = () => {
    setTokens((prevTokens) => prevTokens + 1);
  };

  return tapBilakhCoin;
};
