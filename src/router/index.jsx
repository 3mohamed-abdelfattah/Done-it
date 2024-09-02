import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import { MainPage } from "@/pages/main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;