import * as React from 'react';
import { useDarkMode } from '../../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Divider,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const drawerWidth = 260;

const clientList = [
  { label: 'Converted', value: 77 },
  { label: 'Demo', value: 700 },
  { label: 'Future Client', value: 68 },
  { label: 'Not interested', value: 75 },
  { label: 'Did not pick', value: 56 },
  { label: 'Dormant', value: 45 },
  { label: 'Busy', value: 154 },
  { label: 'Wrong Number', value: 87 },
  { label: 'E-mails', value: 38 },
  { label: 'Later', value: 60 },
];

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: "All Lead's", icon: <PeopleIcon /> },
  { text: 'Clients', icon: <GroupIcon /> },
  { text: 'Agents', icon: <PersonIcon /> },
  { text: 'Reports & analytics', icon: <BarChartIcon /> },
  { text: 'Add Lead', icon: <AddCircleIcon /> },
  { text: 'Setting', icon: <SettingsIcon /> },
];

const Sidebar = ({ collapsed, setCollapsed }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [clientDropdownOpen, setClientDropdownOpen] = React.useState(false);
  const [activeClientIdx, setActiveClientIdx] = React.useState(null);

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
          background: darkMode ? '#040813' : '#fff',
          color: darkMode ? '#fff' : '#000',
          transition: 'width 0.3s',
          overflowX: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 90,
          left: 0,
          boxShadow: '4px 4px 20px rgba(37, 155, 203, 0.3)',
          border: darkMode ? '1px solid #fff' : '1px solid white',
          borderRadius: '10px 15px 10px 10px',
        },
      }}
    >
      {/* Top Bar */}
      <Toolbar sx={{ minHeight: 56, px: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <IconButton onClick={() => setCollapsed((prev) => !prev)}>
            <MenuIcon style={{ color: darkMode ? '#fff' : '#000' }} />
          </IconButton>
          {!collapsed && (
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#fff' : '#000', ml: 2 }}>
              Gold CRM
            </Typography>
          )}
        </Box>
      </Toolbar>

      <Divider />

      {/* Menu Items */}
      <List sx={{ background: darkMode ? '#111828' : '#dff4ff', borderRadius: '15px' }}>
        {menuItems.map((item, idx) => {
          const isClients = item.text === 'Clients';
          const isActive = activeIdx === idx || hoverIdx === idx;

          return (
            <React.Fragment key={item.text}>
              <ListItem
                button
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
                onClick={() => {
                  setActiveIdx(idx);
                  if (item.text === 'Dashboard') navigate('/mainDashboard');
                  else if (item.text === "All Lead's") navigate('/mainDashboard/allLead');
                  else if (item.text === 'Clients') setClientDropdownOpen((open) => !open);
                  else if (item.text === 'Agents') navigate('/mainDashboard/agents');
                }}
                sx={{
                  borderRadius: '13px',
                  mb: '7px',
                  width: '98%',
                  mx: 'auto',
                  background: isActive ? '#DDE5F8' : darkMode ? '#111828' : '#fff',
                  border: isActive ? '2px solid #688CE2' : darkMode ? '2px solid #fff' : 'none',
                  color: isActive ? '#688CE2' : darkMode ? '#fff' : '#000',
                  height: '48px',
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, color: isActive ? '#688CE2' : darkMode ? '#fff' : '#000' }}>
                  {item.icon}
                </ListItemIcon>
                {!collapsed && (
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <ListItemText primary={item.text} sx={{ ml: 2 }} />
                    {isClients && (
                      <ArrowDropDownIcon
                        sx={{
                          color: isActive ? '#688CE2' : darkMode ? '#fff' : '#3D9AFF',
                        }}
                      />
                    )}
                  </Box>
                )}
              </ListItem>

              {/* Client Dropdown */}
              {isClients && clientDropdownOpen && !collapsed && (
                <Box
                  sx={{
                    pl: 6,
                    pr: 2,
                    py: 1,
                    background: darkMode ? '#111828' : '#fff',
                    borderRadius: '13px',
                    boxShadow: '0 2px 8px rgba(104,140,226,0.08)',
                    mt: 1,
                    mb: 1,
                    border: darkMode ? '1px solid white' : '2px solid #688CE2',
                  }}
                >
                  {clientList.map((client, cidx) => (
                    <Box
                      key={client.label}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        py: 0.7,
                        px: 2,
                        borderRadius: '8px',
                        mb: 0.5,
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: activeClientIdx === cidx ? 600 : 500,
                        color: activeClientIdx === cidx ? '#3D9AFF' : darkMode ? '#fff' : '#222',
                        background: activeClientIdx === cidx ? '#E6F3FF' : 'transparent',
                        '&:hover': {
                          color: '#3D9AFF',
                          background: '#E6F3FF',
                        },
                      }}
                      onClick={() => {
                        setActiveClientIdx(cidx);
                        navigate(`/mainDashboard/clients/${encodeURIComponent(client.label)}`);
                      }}
                    >
                      <span style={{ flex: 1 }}>{client.label}</span>
                      <span style={{ marginLeft: 8 }}>{client.value}</span>
                    </Box>
                  ))}
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      {/* Logout */}
      <Box sx={{ mb: 2 }}>
        <List>
          <ListItem
            button
            sx={{
              justifyContent: 'center',
              px: 2,
              borderRadius: '13px',
              width: '98%',
              mx: 'auto',
              background: darkMode ? '#111828' : 'none',
              color: darkMode ? '#fff' : '#000',
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, color: darkMode ? '#fff' : '#000' }}>
              <LogoutIcon />
            </ListItemIcon>
            {!collapsed && (
              <ListItemText primary="Logout" sx={{ ml: 2 }} />
            )}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
