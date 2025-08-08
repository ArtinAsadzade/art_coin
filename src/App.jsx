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

  const { setAllTokens, setTokenLimit, setLevel, setUser } = useContext(UserAllDataContext);

  const navigate = useNavigate();
  const token = decrypted("token");

  useEffect(() => {
    if (token) {
      axios
        .post(`${import.meta.env.VITE_API}api/users/by-email`, { email: token }, { headers: { Authorization: token } })
        .then((res) => {
          setAllTokens(+res.data.coins);
          setTokenLimit(+res.data.coinLimit);
          setLevel(+res.data.level);
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
  }, [navigate, setAllTokens, setLevel, setTokenLimit, setUser, token]);

  return (
    <div className="w-full bg-primary flex justify-center">
      <div className="w-full min-h-svh max-w-[560px] ">{routes}</div>
    </div>
  );
}

export default App;
