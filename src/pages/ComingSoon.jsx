import { useContext } from "react";
import { IsMobileViewContext } from "../context/IsMobileViewContext";
import { Navigate } from "react-router-dom";

export default function ComingSoon() {
  const { isMobile } = useContext(IsMobileViewContext);
  return (
    <>
      {isMobile ? (
        <div>
          <div>ComingSoon</div>
        </div>
      ) : (
        <Navigate to={"/JustMobileView"} />
      )}
    </>
  );
}
