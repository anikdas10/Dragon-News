import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MainContent from "../components/layout-componenet/MainContent";
import CategoryNews from "../components/CategoryNews/CategoryNews";


const router = createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout></HomeLayout>,
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
    }
])
export default router;