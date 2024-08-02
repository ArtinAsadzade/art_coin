import { useNavigate, useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { useEffect } from "react";
import { decrypted } from "./utils";
import axios from "axios";
import { coming_soon_url, home_url, login_url } from "./router/Urls";
import { UserAllDataProvider } from "./context/UserAllDataContext";

function App() {
  const routes = useRoutes(routers);
  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios
        .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token })
        .then((res) => {
          if (res.data.perm > 0) {
            navigate(home_url);
          } else {
            navigate(coming_soon_url);
          }
        })
        .catch(() => {
          navigate(login_url);
          localStorage.clear();
        });
    }
  }, [navigate, token]);

  return (
    <>
      <UserAllDataProvider>{routes}</UserAllDataProvider>
    </>
  );
}

export default App;
