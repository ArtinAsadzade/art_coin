import { useContext } from "react";
import { IsMobileViewContext } from "../context/IsMobileViewContext";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { isMobile } = useContext(IsMobileViewContext);
  return (
    <>
      {isMobile ? (
        <div>
          <div>Home</div>
        </div>
      ) : (
        <Navigate to={"/JustMobileView"} />
      )}
    </>
  );
}
