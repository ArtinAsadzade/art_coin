import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export const routers = [
  { path: "/", element: <ComingSoon /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <PrivateRoute />, children: [{ path: "home", element: <Home /> }] },
];
