import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import Products from "./pages/products";
import Mainpage from "./pages/main-page";
import Errorpage from "./pages/errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
    errorElement: <Errorpage />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
