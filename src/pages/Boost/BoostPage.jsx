import { useCallback, useEffect, useState } from "react";
import Toast from "../../components/Toast";
import Loading from "../../components/Loading";
import { decrypted } from "../../utils";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavContainer from "../../components/Nav/NavContainer";
import BoostComponent from "./components/BoostComponent";

export default function BoostPage() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const { data, setData, loading, setLoading } = useFetch();
  const token = decrypted("token");

  const getUserAccountHandler = useCallback(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API}api/users/status`, { headers: { Authorization: token } })
      .then((res) => {
        (res.data && setLoading(false)) || setData(res.data);
      })
      .catch((err) => {
        (err && setLoading(false)) ||
          setToastData({
            icon: <XMarkIcon className="w-6 text-red-500" />,
            msg: "Server Error",
            show: true,
          });
      });
  }, []);

  useEffect(() => {
    getUserAccountHandler();
  }, [setData, setLoading, token]);

  return (
    <>
      <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-svh flex flex-col">
          <div className="flex-1 flex flex-col gap-5 items-center px-3 relative bg-primary pb-[100px]">
            <BoostComponent getUserAccountHandler={getUserAccountHandler} />
            <NavContainer />
          </div>
        </div>
      )}
    </>
  );
}
