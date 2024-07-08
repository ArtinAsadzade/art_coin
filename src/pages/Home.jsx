import { useContext } from "react";
import { IsMobileViewContext } from "../context/IsMobileViewContext";
import { Navigate } from "react-router-dom";
import Coin from "../components/Coin";
import Footer from "../components/Footer";
import NavContainer from "../components/Nav/NavContainer";
import Tokens from "../components/Tokens";

export default function Home() {
  const { isMobile } = useContext(IsMobileViewContext);

  return (
    <>
      {isMobile ? (
        <div className="w-full h-svh flex flex-col items-center p-5 bg-primary relative select-none">
          <Tokens />
          <Coin />
          <NavContainer />
          <Footer />
        </div>
      ) : (
        <Navigate to={"/JustMobileView"} />
      )}
    </>
  );
}
