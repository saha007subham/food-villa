import "./index.css";
import About from "./components/About";
import Error from "./components/ErrorPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import RestrauntMenu from "./components/RestrauntMenu/RestrauntMenu";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart/Instamart";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";

// Chunking
//Code Splitting
//Dynamic Bundling
//lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart/Instamart"));

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
