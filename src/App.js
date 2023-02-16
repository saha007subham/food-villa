import "./index.css";
import About from "./components/About";
import Error from "./components/ErrorPage";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import Contact from "./components/Contact/Contact";
import RestrauntMenu from "./components/RestrauntMenu/RestrauntMenu";

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
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

export default App;
