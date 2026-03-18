import AllApps from "./Pages/AllApps";

import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import InstallApps from "./Pages/InstallApps";

function App() {
  // const fetchingData = fetch("/FakeDB.json").then((res) => res.json());
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      ErrorBoundary: ErrorPage,
      children: [
        {
          index: true,
          path: "/",
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: Home,
        },
        {
          index: true,
          path: "home",
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: Home,
        },
        {
          path: "/apps",
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: AllApps,
        },
        {
          path: "/installapps",
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: InstallApps,
        },
      ],
    },
  ]);
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
      ,
    </div>
  );
}

export default App;
