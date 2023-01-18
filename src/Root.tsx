import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { GroupDetailsPage, GroupGames, GroupMembers, GroupNights, Groups } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "groups",
                element: <Groups />,
            },
            {
                path: "group/:id",
                element: <GroupDetailsPage />,
                children: [
                    {
                        path: "members",
                        element: <GroupMembers />,
                    },
                    {
                        path: "nights",
                        element: <GroupNights />,
                    },
                    {
                        path: "games",
                        element: <GroupGames />,
                    },
                ],
            },
        ],
    },
]);

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
