import { Navigate, Outlet } from "react-router-dom";
import { decrypted } from "../utils";

export default function PrivateRoute() {
  const decryptedData = decrypted("user");

  return <>{decryptedData ? <Outlet /> : <Navigate to={"/login"} />}</>;
}
