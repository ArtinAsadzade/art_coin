import { Outlet, useNavigate } from "react-router-dom";
import { decrypted } from "../utils";
import { useEffect, useState } from "react";
import { coming_soon_url, login_url } from "./Urls";
import axios from "axios";

export default function PrivateRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios
        .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token })
        .then((res) => {
          setIsAuthenticated(true);
        })
        .catch(() => {
          navigate(coming_soon_url);
        });
    } else {
      navigate(login_url);
    }
  }, [navigate, token]);

  return <>{isAuthenticated ? <Outlet /> : <>Loading..</>}</>;
}
