import { useNavigate, useRoutes } from "react-router-dom";
import { routers } from "./router/routes";
import { useContext, useEffect } from "react";
import { IsMobileViewContext } from "./context/IsMobileViewContext";
import UserTokensProvider from "./context/UserTokensContext";

function App() {
  const routes = useRoutes(routers);
  const navigate = useNavigate();
  const { setIsMobile } = useContext(IsMobileViewContext);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) {
      navigate("/JustMobileView");
      setIsMobile(false);
    }
  }, [navigate, setIsMobile]);

  return (
    <>
      <UserTokensProvider>{routes}</UserTokensProvider>
    </>
  );
}

export default App;
