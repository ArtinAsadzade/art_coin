import { useCallback, useState } from "react";
import { decrypted, formatNumber, getGregorianDateFromISO, nameTranslator } from "../../../utils";
import ModalContainer from "../../../components/ModalContainer";
import CustomBtn from "../../../helper/CustomBtn";
import useFetch from "../../../hooks/useFetch";
import axios from "axios";

export default function AccountInfo({ user, getUserInfo }) {
  const [copied, setCopied] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState({ name: "" });
  const { loading, setLoading } = useFetch();

  console.log(user);

  const token = decrypted("token");

  const disable = value.name.length > 3 && value.name.length < 18;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(user?.inviteLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [user?.inviteLink]);

  const openModalHandler = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleValueChanges = useCallback((e) => {
    const { name, value: inputValue } = e.target;

    setValue((prevValue) => ({
      ...prevValue,
      [name]: inputValue,
    }));
  }, []);

  const setUserNameHandler = useCallback(() => {
    setLoading(true);
    axios
      .put(`${import.meta.env.VITE_API}api/users/`, { email: token, name: value.name }, { headers: { Authorization: token } })
      .then((res) => {
        res && setLoading(false);
        res && setOpenModal(false);
        res && getUserInfo();
      })
      .catch((err) => {
        err && setLoading(false);
        err && setOpenModal(false);
      });
  }, [getUserInfo, setLoading, token, value.name]);

  return (
    <>
      <ModalContainer open={openModal} setOpen={setOpenModal}>
        <div className="flex flex-col gap-5 items-center">
          <div className="w-full flex gap-1 flex-col items-start font-[600]">
            <label htmlFor="name" className="text-[14px]">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name..."
              value={value.name}
              onChange={(e) => handleValueChanges(e)}
              className="bg-secondary text-primary rounded-lg block w-full p-2.5 placeholder-primary outline-none border-2 focus:ring-inset focus:ring-primary focus:ring-2 placeholder:text-[14px] border-primary"
            />
          </div>
          <CustomBtn className="bg-primary text-secondary w-full py-2.5 rounded-lg" onClick={setUserNameHandler} loading={loading} disable={disable}>
            SUBMIT
          </CustomBtn>
        </div>
      </ModalContainer>
      <div className="w-full bg-secondary p-2 relative my-20 rounded-[10px] select-none">
        <img
          className="w-[120px] h-[120px] rounded-full absolute -top-14 left-1/2 -translate-x-1/2 border-[4px] border-secondary border-b-primary"
          src={user?.profile ? user?.profile : "/default_profile.jpg"}
          alt="profile"
        />
        <div className="w-full my-[70px] flex flex-col text-center items-center gap-4 font-bold">
          <h2 className="text-xl text-primary">{nameTranslator(user?.email)}</h2>
          <div className="w-full flex flex-col gap-4 text-sm font-bold text-secondary">
            <div className="flex justify-between gap-4">
              <div className="bg-primary rounded-[5px] w-1/2">
                <p>Per Tap</p>
                {formatNumber(user?.perTap)}
              </div>
              <div className="bg-primary rounded-[5px] w-1/2">
                <p>Coin Limit</p>
                {formatNumber(user?.coinLimit)}
              </div>
            </div>
            <div className="bg-primary rounded-[5px] w-full">
              <p>All Coins</p>
              {formatNumber(user?.coins)}
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 text-sm font-bold text-secondary">
            <div className="flex justify-between gap-4">
              <div className="bg-primary rounded-[5px] w-1/2">
                <p>Join Date</p>
                {getGregorianDateFromISO(user?.createdAt)}
              </div>
              <div className="bg-primary rounded-[5px] w-1/2">
                <p>Invited Friends</p>
                {user?.invitedUsers.length > 0 ? formatNumber(user?.invitedUsers.length) : 0}
              </div>
            </div>
            <div className="w-full flex justify-between gap-4">
              {user?.inviter && (
                <div className="w-full">
                  <p className="text-primary text-left">You Invited By :</p>
                  <div className="relative bg-primary rounded-[5px] w-full p-2 py-3">
                    <p className="line-clamp-2 text-[17px]">{user?.inviter}</p>
                  </div>
                </div>
              )}
              <div className="w-full">
                <p className="text-primary text-left">Your Name :</p>
                <div className="relative bg-primary rounded-[5px] w-full p-2 py-3">
                  <p className="line-clamp-2 text-[17px]">{user?.name ? user?.name : "null"}</p>
                  {!user?.name && (
                    <div
                      className={`absolute inset-0 flex items-center justify-center text-white text-lg font-bold transition-opacity duration-300 ${
                        copied ? "opacity-0" : "opacity-100"
                      } bg-primary bg-opacity-70 rounded-[5px]`}
                    >
                      <button onClick={openModalHandler} className="w-full text-secondary rounded">
                        Set Your Name
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p className="text-primary text-left">Invite Link :</p>
              <div className="relative bg-primary rounded-[5px] w-full p-1">
                <p className="line-clamp-2">{user?.inviteLink}</p>
                <div
                  className={`absolute inset-0 flex items-center justify-center text-white text-lg font-bold transition-opacity duration-300 ${
                    copied ? "opacity-0" : "opacity-100"
                  } bg-primary bg-opacity-90 rounded-[5px]`}
                >
                  <button onClick={handleCopy} className="w-full text-secondary rounded">
                    {copied ? "COPIED!" : "COPY"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
