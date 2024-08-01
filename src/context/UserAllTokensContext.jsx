import { createContext, useState } from "react";

export const UserAllTokensContext = createContext();

export const UserAllTokensProvider = ({ children }) => {
  const [allTokens, setAllTokens] = useState(0);

  return <UserAllTokensContext.Provider value={{ allTokens, setAllTokens }}>{children}</UserAllTokensContext.Provider>;
};
