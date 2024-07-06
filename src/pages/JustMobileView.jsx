import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsMobileViewContext } from "../context/IsMobileViewContext";

export default function JustMobileView() {
  const { isMobile } = useContext(IsMobileViewContext);
  return <>{isMobile ? <Navigate to={"/"} /> : <h1>just Mobile user</h1>}</>;
}
