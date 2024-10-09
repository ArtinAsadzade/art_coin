/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import { decrypted } from "../utils";
import { useContext, useEffect, useState } from "react";
import { coming_soon_url, login_url } from "./Urls";
import axios from "axios";
import Loading from "../components/Loading";
import { UserAllDataContext } from "../context/UserAllDataContext";
import NavContainer from "../components/Nav/NavContainer";

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState("");

  const { setAllTokens, setTokenLimit, setPerTap, setUser } = useContext(UserAllDataContext);

  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios
        .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }, { headers: { Authorization: token } })
        .then((res) => {
          if (+res.data.perm > 0) {
            setIsAuthenticated(true);
            setAllTokens(+res.data.coins);
            setTokenLimit(+res.data.coinLimit);
            setPerTap(+res.data.perTap);
            setUser(res.data);
          } else {
            navigate(coming_soon_url);
          }
        })
        .catch((err) => {
          navigate(login_url);
          localStorage.clear();
        });
    } else {
      navigate(login_url);
      localStorage.clear();
    }
  }, [navigate, setAllTokens, setPerTap, setTokenLimit, setUser, token]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Outlet />
          <NavContainer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
