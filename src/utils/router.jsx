import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => {
                    const servicesRes = await fetch("/service.json");
                    const servicesData = await servicesRes.json();

                    const feedbackRes = await fetch("/happyclients.json");
                    const feedbackData = await feedbackRes.json();

                    return {servicesData, feedbackData};
                }
            },
            {
                path: '/allTreatments',
                element: <AllTreatments></AllTreatments>,
                loader: () => fetch("/service.json")
            },
            {
                path: '/myAppointments',
                element: <MyAppointments></MyAppointments>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/details/:id',
                element: <Details></Details>
            }
        ]
    }
])

export default router;