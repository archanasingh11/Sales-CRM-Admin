import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MdAccountCircle, MdToggleOn } from "react-icons/md";
import { RiToggleLine } from "react-icons/ri";

// 👇 Import the custom hook
import { useDarkMode } from '../../../context/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode(); // use context

  // Apply background & text color to body
  React.useEffect(() => {
    document.body.style.background = darkMode ? '#111828' : '#fff';
    document.body.style.color = darkMode ? '#fff' : '#000';
  }, [darkMode]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{
            background: darkMode ? '#040813' : '#F4F7FB',
            boxShadow: 'none',
            borderBottom: darkMode ? '1px solid #fff' : '1px solid #ccc',
            transition: 'background 0.3s ease'
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                style={{
                  width: '60px',
                  height: '60px',
                  marginTop: '10px'
                }}
              />
            </Typography>

            {/* Toggle Icons */}
            {darkMode ? (
              <MdToggleOn
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#fff',
                  marginRight: '20px',
                  cursor: 'pointer'
                }}
                onClick={toggleDarkMode}
              />
            ) : (
              <RiToggleLine
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#000',
                  marginRight: '20px',
                  cursor: 'pointer'
                }}
                onClick={toggleDarkMode}
              />
            )}

            {/* Account Icon */}
            <MdAccountCircle
              style={{
                width: '30px',
                height: '30px',
                color: darkMode ? '#fff' : '#000'
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
