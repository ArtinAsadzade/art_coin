import { createContext, useState } from "react";

export const UserAllDataContext = createContext();

export const UserAllDataProvider = ({ children }) => {
  const [allTokens, setAllTokens] = useState(0);
  const [tokens, setTokens] = useState(0);
  const [tokenLimit, setTokenLimit] = useState(0);
  const [perTap, setPerTap] = useState(0);
  const [userId, setUserId] = useState("");

  return (
    <UserAllDataContext.Provider
      value={{ allTokens, setAllTokens, tokens, setTokens, tokenLimit, setTokenLimit, perTap, setPerTap, userId, setUserId }}
    >
      {children}
    </UserAllDataContext.Provider>
  );
};
