/* eslint-disable no-unused-vars */
import { Outlet, useNavigate } from "react-router-dom";
import { decrypted } from "../utils";
import { useEffect, useState } from "react";
import { home_url, login_url } from "./Urls";
import axios from "axios";
import Loading from "../components/Loading";

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState("");
  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios.post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }).then((res) => {
        if (+res.data.perm > 0) {
          setIsAuthenticated(true);
          navigate(home_url);
        }
      });
    } else {
      navigate(login_url);
    }
  }, [navigate, token]);

  return <>{isAuthenticated ? <Outlet /> : <Loading />}</>;
}
