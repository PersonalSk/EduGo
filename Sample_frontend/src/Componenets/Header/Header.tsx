// src/components/Header.tsx
import React from 'react';
import './Heder.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log(localStorage.getItem("authtoken"))
    localStorage.removeItem("authtoken"); // Clear auth token
    toast.success("logout successfull", { autoClose: 2000 });
    setTimeout(() => navigate("login"), 500);
  }

  return (
    <>
    <ToastContainer />
    <div className='header'>HI
    <div>
    <button onClick={handleLogout}>
      Logout
    </button>
    </div>
    </div>
    </>
  );
};

export default Header;
