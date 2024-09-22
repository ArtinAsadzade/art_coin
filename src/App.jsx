import { useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { useEffect } from "react";
import { UserAllDataProvider } from "./context/UserAllDataContext";
import bridge from "@vkontakte/vk-bridge";

function App() {
  const routes = useRoutes(routers);

  useEffect(() => {
    bridge.send("VKWebAppInit");
  }, []);

  return (
    <>
      <UserAllDataProvider>{routes}</UserAllDataProvider>
    </>
  );
}

export default App;
