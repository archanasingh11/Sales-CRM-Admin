import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Toolbar, Typography, Box, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 260;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "All Lead's", icon: <PeopleIcon /> },
  { text: "Clients", icon: <GroupIcon /> },
  { text: "Agents", icon: <PersonIcon /> },
  { text: "Reports & analytics", icon: <BarChartIcon /> },
  { text: "Add Lead", icon: <AddCircleIcon /> },
  { text: "Setting", icon: <SettingsIcon /> },
];


const Sidebar = ({ collapsed, setCollapsed }) => {
  const sidebarWidth = collapsed ? 64 : drawerWidth;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarWidth,
          height: 'calc(100vh - 90px)',
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0,0,0,0.12)',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 90,
          left: 0,
          boxShadow: '4px 4px 20px rgba(37, 155, 203, 0.3)',
          zIndex: 1200,
          border:'1px solid white',
          borderRadius:'10px'
        },
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative', justifyContent: 'center' }}>
          {!collapsed && (
            <>
              <MenuIcon style={{ color: 'black', marginRight: 95, cursor: 'pointer' }} onClick={() => setCollapsed((prev) => !prev)} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'center' }}>
                Gold CRM
              </Typography>
            </>
          )}
          {collapsed && (
            <IconButton onClick={() => setCollapsed((prev) => !prev)}>
              <MenuIcon style={{ color: 'black', marginLeft: '5px' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Divider />
      <List style={{background:"#dff4ffff", margin:'0', borderRadius:'15px'}}>
        {menuItems.map((item, idx) => (
          <ListItem button key={item.text} sx={{ justifyContent: 'center', px: 2 }} style={{ borderRadius:'13px', background:"white" ,marginBottom:'7px' ,height:'73', width:'98%'}}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }} style={{color:'black'}}>{item.icon}</ListItemIcon>
            {!collapsed && <ListItemText primary={item.text} sx={{ ml: 2 }} />}
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ mb: 2 }}>
        <Divider />
        <List>
          <ListItem button sx={{ justifyContent: 'center', px: 2 }}>
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}><LogoutIcon /></ListItemIcon>
            {!collapsed && <ListItemText primary="Logout" sx={{ ml: 2 }} />}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;