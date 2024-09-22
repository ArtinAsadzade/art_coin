import { useCallback, useEffect, useState } from "react";
import AccountInfo from "./_components/AccountInfo";
import { decrypted } from "../../utils";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";

export default function Info() {
  const [user, setUser] = useState();
  const token = decrypted("token");

  const { loading, setLoading } = useFetch();

  const getUserInfo = useCallback(() => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }, { headers: { Authorization: token } })
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => err && setLoading(false));
  }, [setLoading, token]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-svh flex flex-col">
          <div className="flex-1 flex flex-col gap-5 items-center px-3 relative bg-primary pb-[100px]">
            <AccountInfo user={user} getUserInfo={getUserInfo} />
          </div>
        </div>
      )}
    </>
  );
}
