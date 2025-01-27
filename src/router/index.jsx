import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "@/layout/PublicRoute";
import ProtectedRoute from "@/layout/ProtectedRoute";
import HomePage from "@/pages/home/HomePage";
import CharacterDetails from "@/pages/home/CharacterDetails";
import MarvelPage from "@/pages/menu/MarvelPage";
import DcPage from "@/pages/menu/DcPage";
import AvengersTeamPage from "@/pages/menu/AvengersTeamPage";
import JusticeLeagueTeamPage from "@/pages/menu/JusticeLeagueTeamPage";
import AboutPage from "@/pages/menu/AboutPage";
import ExtrasPage from "@/pages/menu/ExtrasPage";
import UserProfilePage from "@/pages/profile/UserProfilePage";
import Login from "@/components/profile/Login";
import SignUp from "@/components/profile/Signup";
import ProfileWelcome from "@/pages/profile/ProfileWelcome";

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
                path: "/welcome",
                element: <ProfileWelcome />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
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
                path: "/teams/justice-league",
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