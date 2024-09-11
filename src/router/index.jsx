import PublicRoute from "@/layout/PublicRoute";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import UserProfilePage from "@/pages/profile/UserProfilePage"; 
import MenuPage from "@/pages/menu/MenuPage";
import SignupPage from "@/pages/profile/SignupPage"; 
import LoginPage from "@/pages/profile/LoginPage";  
import CharacterDetails from "@/pages/home/CharacterDetails";
import MarvelPage from "@/pages/home/MarvelPage"; 
import DcPage from "@/pages/home/DcPage"; 
import AvengersTeamPage from '@/pages/home/AvengersTeamPage';

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
            {
                path: "/user/profile",  
                element: <UserProfilePage /> 
            },
            {
                path: "/CharacterDetails",
                element: <CharacterDetails />
            },
            {
                path: "/marvel",
                element: <MarvelPage />
            },
            {
                path: "/dc",
                element: <DcPage />
            },
            {
                path: '/teams/avengers',
                element: <AvengersTeamPage />,
            },
        ],
    }
]);

export default router;
