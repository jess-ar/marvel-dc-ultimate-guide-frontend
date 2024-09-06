//import Login from "@/components/login/Login";
//import SignUp from "@/components/signUp/SignUp";
import "@/index.css";
//import ProtectedRoute from "@/layout/ProtectedRoute";
//import Login from "@/components/login/Login";
//import SignUp from "@/components/signUp/SignUp";
//import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ProfilePage from "@/pages/ProfilePage";
import MenuPage from "@/pages/MenuPage"; 

const router = createBrowserRouter([
    {
        element: <PublicRoute />,
        children: [
            {
                path: '/',
                element: <Navigate to='/home' /> 
            },
            {
                path: "/home",
                element: <HomePage /> 
            },
            {
                path: "/menu",
                element: <MenuPage /> 
            },
            {
                path: "/profile",
                element: <ProfilePage />
            },
        ],
    },
    {
        //path: "/login",
        //element: <Login />,
    },
    {
        //path: "/register",
        //element: <SignUp />
    }
]);

export default router;
