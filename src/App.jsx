import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import { loader } from "./pages/Home";
import "./styles/main.css";
import { CountryProvider } from "./context/CountryContext";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader,
        errorElement: <Error />,
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
      },
    ],
  },
]);

function App() {
  return (
    <CountryProvider>
      <RouterProvider router={router} />
    </CountryProvider>
  );
}

export default App;
