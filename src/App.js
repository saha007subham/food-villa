import "./index.css";
import About from "./components/About";
import Error from "./components/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
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
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default App;
