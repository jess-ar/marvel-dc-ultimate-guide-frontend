import Login from "@/components/login/Login";
import SignUp from "@/components/signUp/SignUp";
import ProtectedRoute from "@/layout/ProtectedRoute";
import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import ProfilePage from "@/pages/ProfilePage";
import MorePage from "@/pages/MorePage";
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
                path: "/search",
                element: <SearchPage />  
            },
            {
                path: "/more",
                element: <MorePage />  
            },
            {
                path: "/profile",
                element: <ProtectedRoute><ProfilePage /></ProtectedRoute>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <SignUp />
    }
]);

export default router;
