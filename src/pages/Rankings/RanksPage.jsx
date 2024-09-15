import { useContext, useEffect, useState } from "react";
import NavContainer from "../components/Nav/NavContainer";
import Ranking from "../components/RanksPage/Ranking.jsx/Ranking";
import RanksPageSlider from "../components/RanksPage/Ranks/RanksPageSlider";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Toast from "../components/Toast";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { UserAllDataContext } from "../context/UserAllDataContext";
import { decrypted } from "../utils";

export default function RanksPage() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const [ranking, setRanking] = useState(1);

  const { data, setData, loading, setLoading } = useFetch();
  const { user } = useContext(UserAllDataContext);
  const token = decrypted("token");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API}api/users`, { headers: { Authorization: token } })
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
          <div className="flex-1 flex flex-col gap-5 items-center px-3 relative   bg-primary pb-[100px]">
            <RanksPageSlider />
            <Ranking
              data={ranking === 1 ? data?.sort((a, b) => b.coins - a.coins) : data?.sort((a, b) => b.invitedUsers.length - a.invitedUsers.length)}
              userId={user._id}
              ranking={ranking}
              setRanking={setRanking}
            />
            <NavContainer />
          </div>
        </div>
      )}
    </>
  );
}
