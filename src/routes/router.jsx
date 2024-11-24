import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

import CategoryNews from "../components/CategoryNews/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path:'/',
      element:<PrivateRoute>
        <HomeLayout></HomeLayout>
      </PrivateRoute>,
      children:[
        {
            path:"",
            element:<Navigate to={'/category/01'}></Navigate>
        },
        {
            path:'/category/:id',
            element:<CategoryNews></CategoryNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            
        }
      ]
    },
    {
      path:'/auth',
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path:'/auth/login',
          element:<Login></Login>
        },
        {
          path:'/auth/register',
          element: <Register></Register>
        },
      ]
    }
])
export default router;