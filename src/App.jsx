import AllApps from "./Pages/AllApps";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import InstallApps from "./Pages/InstallApps";
import AppsDetails from "./Pages/AppsDetails";
import Loading from "./Pages/Loading";
import AppErrorPage from "./Pages/AppErrorPage";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      ErrorBoundary: ErrorPage,
      HydrateFallback: Loading,
      children: [
        {
          index: true,
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: Home,
        },
        {
          path: "home",
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: Home,
        },
        {
          path: "apps",
          Component: AllApps,
        },
        {
          path: "installapps",
          Component: InstallApps,
        },
        {
          path: "appsdetails/:id",
          ErrorBoundary: AppErrorPage,
          loader: () => fetch("/FakeDB.json").then((res) => res.json()),
          Component: AppsDetails,
        },
      ],
    },
  ]);
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
