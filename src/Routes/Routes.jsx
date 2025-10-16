import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:Root,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/about',
                Component:About
            },
            {
                path:'/profile',
                Component:Profile
            },
            {
                path:'/signin',
                Component:SignIn
            },
            {
                path:'/signup',
                Component:SignUp
            }
        ]
    }
])