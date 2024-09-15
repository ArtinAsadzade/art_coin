import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { decrypted } from "../utils";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Toast from "../components/Toast";
import Loading from "../components/Loading";
import NavContainer from "../components/Nav/NavContainer";
import Social from "../components/Status/Social";
import UsersStatus from "../components/Status/UsersStatus";

export default function Status() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });

  const { data, setData, loading, setLoading } = useFetch();
  const token = decrypted("token");

  useEffect(() => {
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
  }, [setData, setLoading, token]);

  return (
    <>
      <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} />
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-svh flex flex-col">
          <div className="flex-1 flex flex-col gap-5 items-center px-3 relative bg-primary pb-[100px]">
            <UsersStatus data={data} />
            <Social />
            <NavContainer />
          </div>
        </div>
      )}
    </>
  );
}
