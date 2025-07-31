import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import LoginPage from './pages/LoginPage';
import CrmLogin from './crmComponents/crmLogin/CrmLogin';
import AllCrmPage from './pages/AllCrmPage';
import MainDashboard from './Components/mainDashbord/MainDashboard/MainDashboard';
import AdminDashboard from './Components/mainDashbord/midContent/adminDashboard/AdminDashboard';
import AllLeads from './Components/mainDashbord/midContent/AllLeads/AllLeads';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
=======
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
>>>>>>> e88e52abd567e5f82590d82f431fd32beb7d4af3
    },
  },
});

<<<<<<< HEAD
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/mainDashboard" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<AllCrmPage />} />
          <Route path="/crmLogin" element={<CrmLogin />} />

          <Route path="/mainDashboard" element={<MainDashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="allLead" element={<AllLeads />} />
            {/* Add more child routes here like /mainDashboard/clients etc */}
          </Route>
=======
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
>>>>>>> e88e52abd567e5f82590d82f431fd32beb7d4af3
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> e88e52abd567e5f82590d82f431fd32beb7d4af3
