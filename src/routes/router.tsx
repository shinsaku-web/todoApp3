import { Layout } from "../components/organisims/Layout";
import { IndexPage } from "../pages";
import { createBrowserRouter } from "react-router-dom";
import { TodoCreatePage } from "../pages/create";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { TodoDetailPage } from "../pages/detail";
import { TodoEditPage } from "../pages/edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/create",
        element: <TodoCreatePage />,
      },
      {
        path: "/edit/:id",
        element: <TodoEditPage />,
      },
      {
        path: "/detail/:id",
        element: <TodoDetailPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
