import { createBrowserRouter } from 'react-router-dom'
import App from "./App";
import Hello from './Componenets/Hello';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '/hello',
                element : <Hello />
            },
        ]
    }
])

export default Router;