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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
