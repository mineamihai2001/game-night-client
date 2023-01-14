import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { GroupDetails, Groups } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/groups",
                element: <Groups />,
            },
            {
                path: "/group/:id",
                element: <GroupDetails />,
            },
        ],
    },
]);

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
