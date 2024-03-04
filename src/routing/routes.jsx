import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Quiz from "../components/Quiz";
import Game from "../components/Game";
import Find from "../components/Find";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  {
    path: "/quiz",
    element: (
      <Dashboard>
        <Quiz />
      </Dashboard>
    ),
  },
  {
    path: "/guess",
    element: (
      <Dashboard>
        <Game />
      </Dashboard>
    ),
  },
  {
    path: "/predict",
    element: (
      <Dashboard>
        <Find />
      </Dashboard>
    ),
  },
]);

export default router;
