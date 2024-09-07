import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../pages/Login";
import { MainPage } from '../pages/main/MainPage';

// Pages

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;