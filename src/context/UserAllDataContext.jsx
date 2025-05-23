import { createContext, useState } from "react";

export const UserAllDataContext = createContext();

export const UserAllDataProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [allTokens, setAllTokens] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [tokenLimit, setTokenLimit] = useState(0);
  const [level, setLevel] = useState(0);

  return (
    <UserAllDataContext.Provider value={{ allTokens, setAllTokens, tokens, setTokens, tokenLimit, setTokenLimit, level, setLevel, user, setUser }}>
      {children}
    </UserAllDataContext.Provider>
  );
};
