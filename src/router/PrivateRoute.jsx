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
  const { setAllTokens, setTokenLimit, setPerTap } = useContext(UserAllDataContext);
  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios.post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }).then((res) => {
        if (+res.data.perm > 0) {
          setIsAuthenticated(true);
          setAllTokens(+res.data.coins);
          setTokenLimit(+res.data.coinLimit);
          setPerTap(+res.data.perTap);
        } else {
          navigate(coming_soon_url);
        }
      });
    } else {
      navigate(login_url);
    }
  }, [navigate, setAllTokens, setPerTap, setTokenLimit, token]);

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
