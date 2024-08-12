/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import { decrypted } from "../utils";
import { useCallback, useContext, useEffect, useState } from "react";
import { coming_soon_url, login_url } from "./Urls";
import axios from "axios";
import Loading from "../components/Loading";
import { UserAllDataContext } from "../context/UserAllDataContext";
import NavContainer from "../components/Nav/NavContainer";
import ModalContainer from "../components/ModalContainer";
import CustomBtn from "../helper/CustomBtn";
import useFetch from "../hooks/useFetch";

export default function PrivateRoute() {
  const [openModal, setOpenModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const [value, setValue] = useState({ name: "" });

  const { loading, setLoading } = useFetch();

  const { setAllTokens, setTokenLimit, setPerTap } = useContext(UserAllDataContext);

  const disable = value.name.length > 3 && value.name.length < 18;

  const navigate = useNavigate();
  const token = decrypted("token");

  const handleValueChanges = useCallback((e) => {
    const { name, value: inputValue } = e.target;

    setValue((prevValue) => ({
      ...prevValue,
      [name]: inputValue,
    }));
  }, []);

  useEffect(() => {
    if (token) {
      axios.post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }).then((res) => {
        if (+res.data.perm > 0) {
          setIsAuthenticated(true);
          setAllTokens(+res.data.coins);
          setTokenLimit(+res.data.coinLimit);
          setPerTap(+res.data.perTap);
          !res.data.name && setOpenModal(true);
        } else {
          navigate(coming_soon_url);
        }
      });
    } else {
      navigate(login_url);
    }
  }, [navigate, setAllTokens, setPerTap, setTokenLimit, token]);

  const setUserNameHandler = useCallback(() => {
    setLoading(true);
    axios
      .put(`${import.meta.env.VITE_API}api/users/`, { email: token, name: value.name })
      .then((res) => {
        res && setLoading(false);
        res && setOpenModal(false);
      })
      .catch((err) => {
        err && setLoading(false);
        err && setOpenModal(false);
      });
  }, [setLoading, token, value.name]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <ModalContainer open={openModal} setOpen={setOpenModal}>
            <div className="font-bold flex flex-col gap-5 items-center">
              <h3>You Can Set Your Name</h3>
              <div className="w-full flex gap-1 flex-col items-start">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name ..."
                  value={value.name}
                  onChange={(e) => handleValueChanges(e)}
                  className="bg-secondary text-primary rounded-lg block w-full p-2.5 placeholder-primary outline-none border-2 focus:ring-inset focus:ring-primary focus:ring-2 border-primary"
                />
              </div>
              <CustomBtn
                className="border-[1px] border-primary w-full py-2.5 rounded-lg"
                onClick={setUserNameHandler}
                loading={loading}
                disable={disable}
              >
                SUBMIT
              </CustomBtn>
            </div>
          </ModalContainer>
          <Outlet />
          <NavContainer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
