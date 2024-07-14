import ComingSoon from "../pages/ComingSoon";
import Login from "../pages/Login";

export const routers = [
  { path: "/", element: <ComingSoon /> },
  { path: "/login", element: <Login /> },
  // { path: "/", element: <PrivateRoute />, children: [{ path: "home", element: <Home /> }] },
];
