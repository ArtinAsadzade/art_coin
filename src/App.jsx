import { useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { UserTokensProvider } from "./context/UserTokensContext";

function App() {
  const routes = useRoutes(routers);

  return (
    <>
      <UserTokensProvider>{routes}</UserTokensProvider>
    </>
  );
}

export default App;
