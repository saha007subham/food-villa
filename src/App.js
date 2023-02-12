import "./index.css";
import AppLayout from "./app-layout/AppLayout";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default App;
