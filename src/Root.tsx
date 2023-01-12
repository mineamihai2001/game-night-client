import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
