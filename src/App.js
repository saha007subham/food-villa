import "./index.css";
import AppLayout from "./app-layout/AppLayout";
import About from "./components/About";
import Error from "./components/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppLayout />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default App;
