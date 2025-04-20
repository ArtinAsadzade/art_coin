/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
  return (
    <div className="w-full bg-primary flex justify-center">
      <div className="w-full min-h-svh max-w-[560px] ">
        <Outlet />
      </div>
      ;
    </div>
  );
}
