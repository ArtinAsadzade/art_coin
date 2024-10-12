import { useCallback, useContext } from "react";
import { UserAllDataContext } from "../context/UserAllDataContext";
import { decrypted, formatNumber } from "../utils";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import CustomBtn from "../helper/CustomBtn";

export default function ClaimTokens() {
  const { loading, setLoading } = useFetch();

  const { allTokens, setAllTokens, tokens, setTokens, tokenLimit, perTap } = useContext(UserAllDataContext);
  const email = decrypted("token");

  const disable = tokens >= 15 * perTap || tokenLimit === 0;

  const updateUserTokensHandler = useCallback(() => {
    setLoading(true);

    axios
      .put(`${import.meta.env.VITE_API}api/users`, { email, coins: tokens + allTokens, coinLimit: tokenLimit }, { headers: { Authorization: email } })
      .then((res) => {
        setLoading(false);
        setTokens(0);
        setAllTokens(res.data.coins);
      })
      .catch((err) => err && setLoading(false));
  }, [allTokens, email, setAllTokens, setLoading, setTokens, tokenLimit, tokens]);

  return (
    <>
      <div className="w-full bg-secondary rounded-md flex items-center justify-between px-3 py-2">
        <div className="py-2 text-center rounded-lg text-2xl text-primary font-bold flex items-center justify-center gap-1">
          <img className="w-[30px] object-cover" src="/logo.webp" alt="" />
          <p>{formatNumber(tokens) ? formatNumber(tokens) : 0}</p>
        </div>
        <CustomBtn
          className="bg-primary text-secondary font-bold w-1/3 rounded-md py-3"
          loading={loading}
          onClick={updateUserTokensHandler}
          disable={disable}
        >
          Claim
        </CustomBtn>
      </div>
    </>
  );
}
