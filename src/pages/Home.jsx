import { useContext, useEffect } from "react";
import ClaimTokens from "../components/ClaimTokens";
import Coin from "../components/Coin";
import NavContainer from "../components/Nav/NavContainer";
import StatusBar from "../components/StatusBar";
import Tokens from "../components/Tokens";
import { decrypted } from "../utils";
import axios from "axios";
import { UserAllDataContext } from "../context/UserAllDataContext";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export default function Home() {
  const { loading, setLoading } = useFetch();
  const { setAllTokens, setTokenLimit } = useContext(UserAllDataContext);

  const email = decrypted("token");

  useEffect(() => {
    setLoading(true);
    axios.post(`${import.meta.env.VITE_API}api/users/by-email`, { email }).then((res) => {
      setAllTokens(+res.data.coins);
      setTokenLimit(+res.data.coinLimit);
      setLoading(false);
    });
  }, [email, setAllTokens, setLoading, setTokenLimit]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-svh flex flex-col">
          <div className="flex-1 flex flex-col gap-5 items-center p-5 bg-primary relative select-none">
            <Tokens />
            <StatusBar />
            <Coin />
            <ClaimTokens />
            <NavContainer />
          </div>
        </div>
      )}
    </>
  );
}
