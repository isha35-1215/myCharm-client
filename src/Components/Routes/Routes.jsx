import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import MyCart from "../MyCart/MyCart";
import Register from "../Register/Register";
import Root from "../Root/Root";
import Home from "../Home/Home";
import ProductDetails from "../ProductDetails/ProductDetails";
import UpdateProduct from "../UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
              },
              {
                path: "/myCart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/cart`)
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
                path: "/products/:brand",
                element: <Products></Products>,
                loader: ({params}) =>  fetch(`http://localhost:5000/products/${params.brand}`)
              },
              {
                path: "/productDetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
              },
              {
                path:"/updateProduct/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/updateProduct/${params.id}`)
              }
        ]
    }
  
  ]);

  export default router;