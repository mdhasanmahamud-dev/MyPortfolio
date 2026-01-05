import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home/Home/Home";
import Detailse from "../page/Projects/Detailse/Detailse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
        {
        path: "projects/:id",
        element: <Detailse />,
      },
    ],
  },
]);

export default router;
