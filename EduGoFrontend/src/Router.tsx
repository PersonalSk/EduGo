import { createBrowserRouter, Navigate } from 'react-router-dom'
import App from "./App";
import Hello from './Componenets/Hello';
import LoginPage from './Componenets/Login/Login';
import SignUpPage from './Componenets/SignUp/Signup'

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
            
        ]
    }
])

export default Router;