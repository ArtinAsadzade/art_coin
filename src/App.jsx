import { useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { UserTokensProvider } from "./context/UserTokensContext";
import { useEffect } from "react";
import { getUserData } from "./utils";

function App() {
  const routes = useRoutes(routers);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <UserTokensProvider>{routes}</UserTokensProvider>
    </>
  );
}

export default App;
