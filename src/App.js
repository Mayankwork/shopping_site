import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import store from "./utils/store";
import { Provider } from "react-redux";
import ViewProduct from "./components/ViewProduct";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "/productview",
    element: <ViewProduct />,
  },

]);
function App() {
  return (
    <>
      {" "}
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
