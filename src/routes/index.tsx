import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Homepage from "../pages/homepage";

const Team = () => {
    return (
        <div>
            <h1>Team</h1>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        loader: () => (<div>loading</div>)
        // children: [
        //   {
        //     path: "team",
        //     element: <Team />,
        //     loader: teamLoader,
        //   },
        // ],
      },
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    )
}