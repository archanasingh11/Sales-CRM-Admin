// src/layouts/DashboardLayout.jsx

import React, { createContext, useState } from 'react';
// Create DarkModeContext
export const DarkModeContext = createContext(false);
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

import { IoMdMenu } from "react-icons/io";
import { GrCubes } from "react-icons/gr";


import { IoMdMenu } from "react-icons/io";
import { GrCubes } from "react-icons/gr";


const drawerWidth = 240;

// This is your reusable layout
const DashboardLayout = ({ children }) => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={darkMode}>
      <Box sx={{ display: 'flex' }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: darkMode ? '#111828' : '#fff', color: darkMode ? '#fff' : '#000' }}
        elevation={1}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} />
          <IconButton onClick={() => setDarkMode((prev) => !prev)}>
            <LightModeIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', borderRight: '1px solid rgba(0, 0, 0, 0.12)' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ pl: 2, fontWeight: 'bold' }}>Gold CRM</Typography>
        </Toolbar>
        <Divider />

        <List >
          {/* This is where you can change the sidebar options */}
          <IoMdMenu style={{
            width:'24px',
            height:'24px',
            margin:'20px'
          }}/> 
          <ListItem disablePadding >
            <ListItemButton selected style={{
              backgroundColor:"#DDE5F8",
              border:'1px solid #688CE2'
            }}>
              <ListItemIcon><GrCubes
               style={{
                color:'#688CE2',
                width:'24px',
                height:'24px'
                }}/></ListItemIcon>

        <List>
          {/* This is where you can change the sidebar options */}
          <ListItem disablePadding>
            <ListItemButton selected>
              <ListItemIcon><AllInboxIcon /></ListItemIcon>

        <List >
          {/* This is where you can change the sidebar options */}
          <IoMdMenu style={{
            width:'24px',
            height:'24px',
            margin:'20px'
          }}/> 
          <ListItem disablePadding >
            <ListItemButton selected style={{
              backgroundColor:"#DDE5F8",
              border:'1px solid #688CE2'
            }}>
              <ListItemIcon><GrCubes
               style={{
                color:'#688CE2',
                width:'24px',
                height:'24px'
                }}/></ListItemIcon>

              <ListItemText primary="All CRM" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><AddIcon /></ListItemIcon>
              <ListItemText primary="Create CRM" />
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: darkMode ? '#111828' : 'background.default', p: 3 }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        {children} {/* Your page-specific content will render here! */}
      </Box>
      </Box>
    </DarkModeContext.Provider>
  );
};

export default DashboardLayout;