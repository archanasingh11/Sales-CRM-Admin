import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import AllCrmPage from './pages/AllCrmPage'; 
// A basic theme to get you started
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // This blue matches the login button in your design
    },
  },
  components: {
    // You might want to adjust this or remove it if you are not using FilledInput variant anymore
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
            },
        },
    },
  },
});

// A placeholder for your main dashboard component after login
const Dashboard = () => (
  <div>
    <h1>Welcome to the Dashboard!</h1>
    {/* You will build your main dashboard layout here */}
  </div>
);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Helps normalize CSS across browsers */}
      <Router>
        <Routes>
          {/* This route renders your login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* This is a placeholder for your main dashboard page */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<AllCrmPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;