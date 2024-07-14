import { createContext, useState } from "react";
import { decrypted } from "../utils";

export const UserTokensContext = createContext();

export const UserTokensProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() => {
    const data = decrypted("account");
    return data && data.email ? parseInt(data.coins, 10) || 0 : 0;
  });

  return <UserTokensContext.Provider value={{ tokens, setTokens }}>{children}</UserTokensContext.Provider>;
};
