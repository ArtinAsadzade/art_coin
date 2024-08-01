import { createContext, useState } from "react";

export const UserTokensContext = createContext();

export const UserTokensProvider = ({ children }) => {
  const [tokens, setTokens] = useState(0);

  return <UserTokensContext.Provider value={{ tokens, setTokens }}>{children}</UserTokensContext.Provider>;
};
