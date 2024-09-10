import { useNavigate, useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { useEffect } from "react";
import { decrypted } from "./utils";
import axios from "axios";
import { login_url } from "./router/Urls";
import { UserAllDataProvider } from "./context/UserAllDataContext";
import bridge from "@vkontakte/vk-bridge";

function App() {
  const routes = useRoutes(routers);
  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    bridge.send("VKWebAppInit");
    if (token) {
      axios.post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }, { headers: { Authorization: token } }).catch(() => {
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
