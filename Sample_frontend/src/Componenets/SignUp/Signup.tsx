import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import backgroundImage from '../../assets/LoginSignupBackground.jpg';
import './Signup.css'; // Import the CSS file

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

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('SignUp Form submitted with:', { firstName, lastName, email, password });
    const userData = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      role: "user", // You can modify or get role dynamically
    };
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("User registered successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        navigate("/")

      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Grid container component="main" className="root-grid">
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
            Welcome!
          </Typography>
          <Typography variant="body1" component="div">
            Please sign up to exprience our UI.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper-styled">
          <Avatar className="avatar-styled">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className="form-styled" noValidate onSubmit={handleSubmit}>
            <div className="name-fields">
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="fname"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign in
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

export default SignUp;
