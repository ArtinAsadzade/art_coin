import Home from "../pages/Home";
import Info from "../pages/Info/Info";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import RankPage from "../pages/Rankings/RankPage";
import Status from "../pages/Status";
import TasksPage from "../pages/Tasks/TasksPage";
import { boost_url, home_url, info_url, login_url, ranks_url, status_url, task_url } from "./Urls";

export const routers = [
  { path: login_url, element: <Login /> },
  { path: home_url, element: <Home /> },
  { path: status_url, element: <Status /> },
  { path: boost_url, element: <Home /> },
  { path: task_url, element: <TasksPage /> },
  { path: info_url, element: <Info /> },
  { path: ranks_url, element: <RankPage /> },
  { path: "*", element: <PageNotFound /> },
];
