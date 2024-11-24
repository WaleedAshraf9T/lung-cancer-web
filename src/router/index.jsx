import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import LayoutTwo from "../components/layout/LayoutTwo";
import LandingPage from "../page/LadningPage.jsx";
import ErrorPage from "../error-page";
import LungCancerDetection from "../page/DetectionPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LayoutTwo />,
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "*",
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/detect",
    element: <LungCancerDetection />,
  },
]);