import React from 'react';

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

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// Pages
import LoginPage from './pages/LoginPage';
import CrmLogin from './crmComponents/crmLogin/CrmLogin';
import AllCrmPage from './pages/AllCrmPage';

// Dashboard & Routes
import MainDashboard from './Components/mainDashbord/MainDashboard/MainDashboard';
import AdminDashboard from './Components/mainDashbord/midContent/adminDashboard/AdminDashboard';
import AllLeads from './Components/mainDashbord/midContent/AllLeads/AllLeads';
import LeadDetails from './Components/mainDashbord/MainDashboard/leadDetails/LeadDetails';
import Clients from './Components/mainDashbord/midContent/clients/Clients';
import AgentsList from './Components/mainDashbord/midContent/Agents/AgentsList';
import AgentReport from './Components/mainDashbord/midContent/Agents/AgentReports';

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
  },
});


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

// A placeholder for your main dashboard component after login
const Dashboard = () => (
  <div>
    <h1>Welcome to the Dashboard!</h1>
    {/* You will build your main dashboard layout here */}
  </div>
);



      },
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Redirect root path */}
          <Route path="/" element={<Navigate to="/mainDashboard" />} />

          {/* Standalone pages */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<AllCrmPage />} />

          <Route path="/crmLogin" element={<CrmLogin />} />

          {/* Main Dashboard Layout with nested routes */}
          <Route path="/mainDashboard" element={<MainDashboard />}>
            <Route index element={<AdminDashboard />} />
            <Route path="allLead" element={<AllLeads />} />
            <Route path="lead-details/:id" element={<LeadDetails />} />
            <Route path="/mainDashboard/clients/:type" element={<Clients />} />
            <Route path="agents" element={<AgentsList />} />
            <Route path="agent-reports" element={<AgentReport />} />

          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

