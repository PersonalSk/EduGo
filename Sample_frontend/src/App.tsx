import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './Componenets/Header/Header';
import SideBar from './Componenets/MenuBar/SideBar';
import Footer from './Componenets/Footer/Footer';
import SignUp from './Componenets/SignUp/Signup';
import Login  from './Componenets/Login/Login';


function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authtoken");
    if (!token) {
      navigate("/login"); // Redirect to login if no token found
    }
  }, [navigate]);

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <SideBar />
        <div className="dynamic-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
