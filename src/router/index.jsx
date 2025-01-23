import PublicRoute from "@/layout/PublicRoute";
import ProtectedRoute from "@/layout/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/home/HomePage";
import ProfilePage from "@/pages/profile/ProfilePage";
import UserProfilePage from "@/pages/profile/UserProfilePage";
import SignupPage from "@/pages/profile/SignupPage";
import LoginPage from "@/pages/profile/LoginPage";
import CharacterDetails from "@/pages/home/CharacterDetails";
import MarvelPage from "@/pages/menu/MarvelPage";
import DcPage from "@/pages/menu/DcPage";
import AvengersTeamPage from '@/pages/menu/AvengersTeamPage';
import AboutPage from '@/pages/menu/AboutPage';
import ExtrasPage from '@/pages/menu/ExtrasPage';
import JusticeLeagueTeamPage from "../pages/menu/JusticeLeagueTeamPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/profile",
                element: <ProfilePage />,
            },
            {
                path: "/character-details",
                element: <CharacterDetails />,
            },
            {
                path: "/marvel",
                element: <MarvelPage />,
            },
            {
                path: "/dc",
                element: <DcPage />,
            },
            {
                path: "/teams/avengers",
                element: <AvengersTeamPage />,
            },
            {
                path: "/teams/justice league",
                element: <JusticeLeagueTeamPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/extras",
                element: <ExtrasPage />,
            },
        ],
    },
    {
        path: "/user",
        element: <ProtectedRoute />,
        children: [
            {
                path: "profile",
                element: <UserProfilePage />,
            },
        ],
    },
]);

export default router;