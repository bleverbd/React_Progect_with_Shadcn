import MainLayout from "@/layouts/MainLayout";
import ErrorPage from "@/Pages/Error/ErrorPage";
import NotFoundError from "@/Pages/Error/NotFoundError";
import Home from "@/Pages/Home";
import { createBrowserRouter } from "react-router";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <ErrorPage/>,
      },
      {
        path: "/log-in",
        element: <ErrorPage/>,
      },
      {
        path: "/register-plumber",
        element: <ErrorPage/>,
      },
      
    ],
  },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
 
  {
    path: "*",
    element: <NotFoundError />,
  },
]);
