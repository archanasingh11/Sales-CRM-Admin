import * as React from 'react';
import { useDarkMode } from '../../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [hoverIdx, setHoverIdx] = React.useState(null);
  const [clientDropdownOpen, setClientDropdownOpen] = React.useState(false);
  const [activeClientIdx, setActiveClientIdx] = React.useState(null);

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
          zIndex: 1200,
          border: darkMode ? '1px solid #fff' : '1px solid white',
          borderRadius: '10px 15px 10px 10px',
          ...(darkMode && {
            scrollbarColor: '#888 #040813',
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': {
              width: '8px',
              background: '#040813',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#040813',
            },
          }),
        },
      }}
    >
      <Toolbar sx={{ minHeight: 56, px: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          {!collapsed ? (
            <>
              <MenuIcon style={{ color: darkMode ? '#fff' : 'black', marginRight: 95, cursor: 'pointer' }} onClick={() => setCollapsed((prev) => !prev)} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', textAlign: 'center', color: darkMode ? '#fff' : 'black' }}>
                Gold CRM
              </Typography>
            </>
          ) : (
            <IconButton onClick={() => setCollapsed((prev) => !prev)}>
              <MenuIcon style={{ color: darkMode ? '#fff' : 'black' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
      <Divider />
      <List style={{ background: darkMode ? '#040813' : '#dff4ffff', margin: '0', borderRadius: '15px', }}>
        {menuItems.map((item, idx) => {
          const isClients = item.text === 'Clients';
          const isActive = activeIdx === idx || hoverIdx === idx;
          const effectBackground = isActive ? '#DDE5F8' : (darkMode ? '#111828' : '#fff');
          const effectBorder = isActive ? '2px solid #688CE2' : (darkMode ? '2px solid #fff' : 'none');
          const effectText = isActive ? '#688CE2' : (darkMode ? '#fff' : 'black');

          return (
            <React.Fragment key={item.text}>
              <ListItem
                button
                sx={{ justifyContent: 'center', px: 2 }}
                style={{
                  borderRadius: '13px',
                  background: effectBackground,
                  marginBottom: '7px',
                  height: `${Math.round(73 * 0.6 * 1.1)}px`,
                  width: '98%',
                  cursor: 'pointer',
                  position: 'relative',
                  border: effectBorder,
                  color: effectText,
                  transition: 'all 0.2s',
                  fontWeight: isActive ? 600 : 400,
                }}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
                onClick={() => {
                  setActiveIdx(idx);
                  if (item.text === "Dashboard") navigate('/mainDashboard');
                  else if (item.text === "All Lead's") navigate('/mainDashboard/allLead');
                  else if (item.text === "Clients") setClientDropdownOpen((open) => !open);
                }}
              >
                <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: darkMode ? '#fff' : (isActive ? '#688CE2' : 'black') }}>
                  {React.cloneElement(item.icon, { style: { color: isActive ? '#688CE2' : (darkMode ? '#fff' : 'black') } })}
                </ListItemIcon>
                {!collapsed && (
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <ListItemText primary={item.text} sx={{ ml: 2, color: isActive ? '#688CE2' : (darkMode ? '#fff' : 'black') }} />
                    {isClients && <ArrowDropDownIcon style={{ marginLeft: 8, color: isActive ? '#688CE2' : (darkMode ? '#fff' : '#3D9AFF') }} />}
                  </Box>
                )}
              </ListItem>

              {isClients && clientDropdownOpen && !collapsed && (
                <Box sx={{
                  pl: 6,
                  pr: 2,
                  py: 1,
                  background: darkMode ? '#111828' : (activeIdx === idx ? '#DDE5F8' : 'white'),
                  borderRadius: '13px 15px 13px 13px',
                  boxShadow: '0 2px 8px rgba(104,140,226,0.08)',
                  mt: 1,
                  mb: 1,
                  border: darkMode ? '1px solid white' : (activeIdx === idx ? '2px solid #688CE2' : 'none')
                }}>
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
                        color: activeClientIdx === cidx ? '#3D9AFF' : (darkMode ? '#fff' : '#222'),
                        fontWeight: activeClientIdx === cidx ? 600 : 500,
                        fontSize: '15px',
                        background: activeClientIdx === cidx ? '#E6F3FF' : 'transparent',
                        border: 'none',
                        transition: 'all 0.2s',
                        '&:hover': { color: '#3D9AFF', background: '#E6F3FF' }
                      }}
                      onClick={() => {
                        setActiveClientIdx(cidx);
                        navigate(`/mainDashboard/clients/${encodeURIComponent(client.label)}`);
                      }}
                    >
                      <span style={{ flex: 1 }}>{client.label}</span>
                      <span style={{ fontWeight: 500, marginLeft: 8 }}>{client.value}</span>
                    </Box>
                  ))}
                </Box>
              )}
            </React.Fragment>
          );
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ mb: 2 }}>
        <List>
          <ListItem
            button
            sx={{ justifyContent: 'center', px: 2 }}
            style={{
              borderRadius: '13px',
              background: darkMode ? '#111828' : 'none',
              marginBottom: '7px',
              width: '98%',
              cursor: 'pointer',
              position: 'relative',
              border: 'none',
              color: darkMode ? '#fff' : '#000',
              fontWeight: 400,
              transition: 'all 0.2s',
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', color: darkMode ? '#fff' : '#000' }}>
              <LogoutIcon />
            </ListItemIcon>
            {!collapsed && (
              <ListItemText primary="Logout" sx={{ ml: 2, color: darkMode ? '#fff' : '#000' }} />
            )}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
