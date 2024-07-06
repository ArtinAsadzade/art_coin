import { useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { UserTokensProvider } from "./context/UserTokensContext";
import { useEffect } from "react";

function App() {
  const routes = useRoutes(routers);

  useEffect(() => {
    if (+localStorage.getItem("tokens") > 10000) {
      localStorage.clear();
    }
  }, []);

  return (
    <>
      <UserTokensProvider>{routes}</UserTokensProvider>
    </>
  );
}

export default App;
