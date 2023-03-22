import { createBrowserRouter } from "react-router-dom";
import Home from "../component/pages/Home/Home";
import Login from "../component/pages/Home/SignUp/Login";
import SignUp from "../component/pages/Home/SignUp/SignUp";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <SignUp></SignUp>
            }
            
        ]
    },
])