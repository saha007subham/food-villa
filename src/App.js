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
import { lazy, Suspense, useState } from "react";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart/Cart";

// Chunking
//Code Splitting
//Dynamic Bundling
//lazy Loading
//On Demand Loading
//Dynamic Import

const Instamart = lazy(() => import("./components/Instamart/Instamart"));

function App() {
  const [user, setUser] = useState({
    name: "Subham",
    email: "saha007subham@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        {/* <div className="App"> */}
        <Header />
        <Outlet />
        {/* </div> */}
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default App;
