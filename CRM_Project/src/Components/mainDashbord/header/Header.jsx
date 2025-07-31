import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdAccountCircle, MdToggleOn } from "react-icons/md";
import { RiToggleLine } from "react-icons/ri";


const Header = ({ darkMode, setDarkMode }) => {
  React.useEffect(() => {
    if (darkMode) {
      document.body.style.background = '#111828';
      document.body.style.color = '#fff';
    } else {
      document.body.style.background = '#fff';
      document.body.style.color = '#000';
    }
  }, [darkMode]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{
          background: darkMode ? '#000' : '#fff',
          boxShadow: 'none',
          borderBottom: darkMode ? '2px solid #fff' : '1px solid black'
        }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: darkMode ? '#fff' : '#000' }}>
              <img src="/src/assets/logo.png" alt="Logo" style={{
                width: '60px',
                height: '60px',
                marginTop: '10px'
              }} />
            </Typography>
            {darkMode ? (
              <MdToggleOn
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#fff',
                  marginRight: '20px',
                  cursor: 'pointer'
                }}
                onClick={() => setDarkMode(false)}
              />
            ) : (
              <RiToggleLine
                style={{
                  width: '30px',
                  height: '30px',
                  color: 'black',
                  marginRight: '20px',
                  cursor: 'pointer'
                }}
                onClick={() => setDarkMode(true)}
              />
            )}
            <MdAccountCircle style={{
              width: '30px',
              height: '30px',
              color: darkMode ? '#fff' : 'black'
            }} />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;