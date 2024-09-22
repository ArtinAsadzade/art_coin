import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import RanksSlider from "./_components/AllRanks/RanksSlider";
import Ranking from "./_components/Ranking/Ranking";
import NavContainer from "../../components/Nav/NavContainer";
import { useFetcher } from "react-router-dom";
import Loading from "../../components/Loading";
import Toast from "../../components/Toast";
import { UserAllDataContext } from "../../context/UserAllDataContext";
import { decrypted } from "../../utils";
import useFetch from "../../hooks/useFetch";

export default function RankPage() {
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
            <RanksSlider />
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
