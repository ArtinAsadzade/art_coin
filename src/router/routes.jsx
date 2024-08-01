import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import { coming_soon_url, login_url } from "./Urls";

export const routers = [
  { path: coming_soon_url, element: <ComingSoon /> },
  { path: login_url, element: <Login /> },
  { path: "/", element: <PrivateRoute />, children: [{ path: "home", element: <Home /> }] },
];
