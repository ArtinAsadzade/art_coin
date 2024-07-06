import { createContext, useState, useEffect } from "react";

export const UserTokensContext = createContext();

export const UserTokensProvider = ({ children }) => {
  const [tokens, setTokens] = useState(() => {
    const savedTokens = localStorage.getItem("tokens");
    return savedTokens ? parseInt(savedTokens, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("tokens", tokens);
  }, [tokens]);

  return <UserTokensContext.Provider value={{ tokens, setTokens }}>{children}</UserTokensContext.Provider>;
};
