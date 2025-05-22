import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import backgroundImage from '../../assets/LoginSignupBackground.jpg';
import './Login.css'; // Importing the CSS
import { toast, ToastContainer } from 'react-toastify';
import ToastNotification from '../ToastNotification/ToastNotification';
import { useDispatch, useSelector } from 'react-redux';
import {  set_Dobj } from '../../Redux/Action/Actions';
import { decoderesponsetoken } from '../Functions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // For navigation after login
  const dispatch = useDispatch()

  const dobj = useSelector((state: any) => state.reducer.dobj);
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login Form submitted with:", { email, password });
    setError(null); // Clear previous errors
  
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (response.ok) {
        const decodedData = await decoderesponsetoken(data)
        console.log("Decoded Token Data:", decodedData); // Should contain { email, role }
  
        // Store token in localStorage
        localStorage.setItem("authtoken", data.token);
  
        // Dispatch role & token
        
        dispatch(set_Dobj({...dobj,role:decodedData.role ,email: decodedData.email}));
        // dispatch(set_Email(decodedData.email));
        // dispatch(set_Role(decodedData.role));
        // dispatch(set_Accesstoken(data.token));

  
        console.log("User Role:", decodedData.role);
        console.log("Token:", data.token);
        toast.success(data.message, { autoClose: 1000 });
        // Navigate after a short delay
        setTimeout(() => navigate("/"), 1000);
      } else {
        console.log(data.message);
        toast.error(data.message, { autoClose: 1000 });
      }
    } catch (error) {
      
      toast.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <Grid container component="main" className="root-grid">
      <ToastContainer />
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className="image-grid"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Centered text on the image */}
        <div className="centered-text">
          <Typography variant="h3" component="div">
            Welcome Back!
          </Typography>
          <Typography variant="body1" component="div">
            Please sign in to continue.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper-styled">
          <Avatar className="avatar-styled">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="form-styled" noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
