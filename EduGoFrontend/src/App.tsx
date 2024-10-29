import { Outlet , useNavigate ,useLocation} from 'react-router-dom'
import './App.css'
import { useEffect } from 'react';

function App() {

  const location = useLocation();
  // const naviagte = useNavigate();

  // const defaultLogin = () => {
  //   naviagte('/login')
  // }

  // useEffect(() => {
  //   defaultLogin();
  // }, [naviagte])

  return (
    <>

    {location.pathname === '/' ? (<h1>hi</h1>) : (<Outlet />)}
    </>
  )
}

export default App
