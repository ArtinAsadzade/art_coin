import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsMobileViewContext } from "../context/IsMobileViewContext";

export default function JustMobileView() {
  const { isMobile } = useContext(IsMobileViewContext);
  return (
    <>
      {isMobile ? (
        <Navigate to={"/"} />
      ) : (
        <div className="w-full h-svh bg-primary text-secondary flex items-center justify-center">
          <div className="text-center p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-secondary mb-4">Access Restricted</h1>
            <p className="text-lg mb-2">Sorry, our website is not accessible on desktop computers.</p>
            <p className="text-lg">Please visit us again using your mobile device.</p>
          </div>
        </div>
      )}
    </>
  );
}
