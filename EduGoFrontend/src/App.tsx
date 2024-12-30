import { Outlet , useLocation} from 'react-router-dom'
import './App.css'

function App() {

  const location = useLocation();

  return (
    <>
    {location.pathname === '/' ? (<h1>hi</h1>) : (<Outlet />)}
    </>
  )
}

export default App
