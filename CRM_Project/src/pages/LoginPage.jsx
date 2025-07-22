import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Link,
  Avatar,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LockIcon from '@mui/icons-material/Lock';
// Ensure this path is correct!
import BackgroundImage from '../assets/dashboard-bg.png';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Login data:', data);
    alert(`Logging in with Email: ${data.email}`);
  };

  return (
    // Main Box for the full-screen background
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        position: 'relative',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // The overlay for the background
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(25, 118, 210, 0.7)',
          zIndex: 1,
        },
      }}
    >
      {/* Grid for content, placed on top of the background */}
      <Grid container component="main" sx={{ height: '100vh', position: 'relative', zIndex: 2 }}>

        {/* Left side with brand text (50% width on sm screens and up) */}
        <Grid
          item
          xs={false}
          sm={6} // Changed
          md={6} // Changed
          sx={{
            width: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          <Box sx={{ color: 'white', textAlign: 'center' }}>
            <Avatar sx={{ m: 'auto', bgcolor: 'rgb(240, 179, 41)', width: 96, height: 96, mb: 3 }}>
              <PeopleAltIcon sx={{ fontSize: '4rem' }} />
            </Avatar>
            <Typography variant="h3" component="h1" fontWeight="bold" sx={{ fontSize: '3rem' }}>
              Sales CRM
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontSize: '1.5rem' }}>
              Admin Panel
            </Typography>
          </Box>
        </Grid>

        {/* Right side with the login form (50% width on sm screens and up) */}
        <Grid
          item
          xs={12}
          sm={6} // Changed
          md={6} // Changed
          sx={{
            width: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 0, 0, 0.7)'
          }}
        >
          <Card elevation={6} sx={{ p: 3, width: '100%', maxWidth: 380, borderRadius: '16px' }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                  <LockOpenIcon />
                </Avatar>
                <Typography component="h1" variant="h5" fontWeight="bold">
                  Admin Login
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                  fullWidth
                  margin="normal"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                  {...register('email', { required: 'Email is required' })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                  {...register('password', { required: 'Password is required' })}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
                {/* The rest of your form elements can be placed here */}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Login</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default LoginPage;