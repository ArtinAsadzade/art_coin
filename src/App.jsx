import { useNavigate, useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { useContext, useEffect } from "react";
import { UserAllDataContext } from "./context/UserAllDataContext";
import bridge from "@vkontakte/vk-bridge";
import { decrypted } from "./utils";
import axios from "axios";
import { home_url, login_url } from "./router/Urls";

function App() {
  const routes = useRoutes(routers);

  const { setAllTokens, setTokenLimit, setPerTap, setUser } = useContext(UserAllDataContext);

  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios
        .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }, { headers: { Authorization: token } })
        .then((res) => {
          setAllTokens(+res.data.coins);
          setTokenLimit(+res.data.coinLimit);
          setPerTap(+res.data.perTap);
          setUser(res.data);
        })
        .catch(() => {
          navigate(home_url);
          localStorage.clear();
        });
    } else {
      navigate(login_url);
      localStorage.clear();
    }

    bridge.send("VKWebAppInit");
  }, [navigate, setAllTokens, setPerTap, setTokenLimit, setUser, token]);

  return <>{routes}</>;
}

export default App;
