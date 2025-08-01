// src/layouts/DashboardLayout.jsx

import React, { createContext, useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IoMdMenu } from 'react-icons/io';
import { GrCubes } from 'react-icons/gr';

// Create DarkModeContext
export const DarkModeContext = createContext(false);

const drawerWidth = 240;

const DashboardLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <Box sx={{ display: 'flex' }}>
        {/* Top App Bar */}
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            backgroundColor: darkMode ? '#111828' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
          elevation={1}
        >
          <Toolbar>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
              CRM Dashboard
            </Typography>
            <IconButton onClick={() => setDarkMode((prev) => !prev)} color="inherit">
              <LightModeIcon />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Sidebar Drawer */}
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              borderRight: '1px solid rgba(0, 0, 0, 0.12)',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant="h6" sx={{ pl: 2, fontWeight: 'bold' }}>
              Gold CRM
            </Typography>
          </Toolbar>
          <Divider />

          <List>
            {/* All CRM */}
            <ListItem disablePadding>
              <ListItemButton
                selected
                sx={{
                  backgroundColor: '#DDE5F8',
                  border: '1px solid #688CE2',
                }}
              >
                <ListItemIcon>
                  <GrCubes style={{ color: '#688CE2', width: '24px', height: '24px' }} />
                </ListItemIcon>
                <ListItemText primary="All CRM" />
              </ListItemButton>
            </ListItem>

            {/* Create CRM */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Create CRM" />
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ flexGrow: 1 }} />

          <Divider />

          {/* Bottom List for Logout */}
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Log out" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: darkMode ? '#111828' : 'background.default',
            p: 3,
            minHeight: '100vh',
          }}
        >
          <Toolbar /> {/* Spacer for AppBar */}
          {children}
        </Box>
      </Box>
    </DarkModeContext.Provider>
  );
};

export default DashboardLayout;
