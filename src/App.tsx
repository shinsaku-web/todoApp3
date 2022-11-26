import { Layout } from "./components/Layout";
import { IndexPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoCreatePage } from "./pages/create";
import { LoginPage } from "./pages/login";
import { RegisterPage } from "./pages/register";
import { TodoDeletePage } from "./pages/delete";
import { TodoEditPage } from "./pages/edit";

const router = createBrowserRouter([
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
    element: <TodoDeletePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const App = () => {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
};

export default App;
