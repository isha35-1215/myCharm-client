import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import MyCart from "../MyCart/MyCart";
import Register from "../Register/Register";
import Root from "../Root/Root";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
              },
              {
                path: "/addProduct",
                element: <AddProduct></AddProduct>,
              },
              {
                path: "/myCart",
                element: <MyCart></MyCart>,
              },
              {
                path: "/login",
                element: <Login></Login>,
              },
              {
                path: "/register",
                element: <Register></Register>,
              },
              
              {
                path: "/allProducts/:brand",
                element: <Products></Products>,
                loader: ({params}) =>  fetch(`http://localhost:5000/products/${params.brand}`)
              }
        ]
    }
  
  ]);

  export default router;