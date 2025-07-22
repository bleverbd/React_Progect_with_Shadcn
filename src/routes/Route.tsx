import MainLayout from "@/layouts/shared/MainLayout";
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
    //   {
    //     path: "/chat",
    //     element: <Chats />,
    //   },
      
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
