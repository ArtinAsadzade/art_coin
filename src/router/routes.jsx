import ComingSoon from "../pages/ComingSoon";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import RanksPage from "../pages/RanksPage";
import Status from "../pages/Status";
import PrivateRoute from "./PrivateRoute";
import { coming_soon_url, login_url } from "./Urls";

export const routers = [
  { path: coming_soon_url, element: <ComingSoon /> },
  { path: login_url, element: <Login /> },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      { path: "home", element: <Home /> },
      { path: "status", element: <Status /> },
      { path: "boost", element: <Home /> },
      { path: "task", element: <Home /> },
      { path: "info", element: <Home /> },
      { path: "ranks", element: <RanksPage /> },
    ],
  },
  { path: "*", element: <PageNotFound /> },
];
