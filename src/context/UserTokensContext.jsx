import { createContext, useState, useEffect } from "react";
import { decrypted, encrypted } from "../utils";

export const UserTokensContext = createContext();

export const UserTokensProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() => {
    const data = decrypted("user");
    return data && data.email ? parseInt(data.tokens, 10) || 0 : 0;
  });

  useEffect(() => {
    const data = decrypted("user");
    if (data && data.email) {
      encrypted({ ...data, tokens }, "user");
    }
  }, [tokens]);

  return <UserTokensContext.Provider value={{ tokens, setTokens }}>{children}</UserTokensContext.Provider>;
};
