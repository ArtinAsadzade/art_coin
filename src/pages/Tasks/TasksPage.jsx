import { useCallback, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import NavContainer from "../../components/Nav/NavContainer";
import Loading from "../../components/Loading";
import HotTasks from "./_components/HotTasks";
import axios from "axios";
import { decrypted } from "../../utils";

export default function TasksPage() {
  const [toastData, setToastData] = useState({ msg: "", icon: null, show: false });
  const [ranking, setRanking] = useState(1);
  const token = decrypted("token");

  const { data, setData, loading, setLoading } = useFetch();

  const getTasks = useCallback(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API}api/mission/`, { headers: { Authorization: token } })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => err && setLoading(false));
  }, [setData, setLoading, token]);

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <>
      {/* <Toast icon={toastData.icon} msg={toastData.msg} show={toastData.show} setShow={setToastData} /> */}
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full h-svh flex flex-col">
          <div className="flex-1 flex flex-col gap-5 relative bg-primary pb-[100px]">
            <HotTasks data={data} />
          </div>
          <NavContainer />
        </div>
      )}
    </>
  );
}
