import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from "./App";
import Hello from './Componenets/Hello';
import LoginPage from './Componenets/Login/Login';
import SignUpPage from './Componenets/SignUp/Signup'
import Dynamicpage from './Componenets/Dynamicpage';

const Router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/signup',
        element: <SignUpPage />
    },
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/hello',
                element: <Hello />
            },
            {
                path: "/page/:childItem", // Dynamic child route
                element: <Dynamicpage />,
              },
            
        ]
    }
])

export default Router;