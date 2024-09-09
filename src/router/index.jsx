import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import MenuPage from "@/pages/menu/MenuPage";
import SignupPage from "@/pages/profile/SignupPage"; 
import LoginPage from "@/pages/profile/LoginPage";  

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
            {
                path: "/signup",
                element: <SignupPage /> 
            },
            {
                path: "/login",
                element: <LoginPage />  
            },
        ],
    },
]);

export default router;