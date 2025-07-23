import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MdAccountCircle } from "react-icons/md";
import { RiToggleLine } from "react-icons/ri";

const Header = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{
        background:'#F4F7FB',
        boxShadow:'none',
        borderBottom:'1px solid black'
       }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="/src/assets/logo.png" alt="Logo" style={{
                width:'60px' ,
                height:'60px',
                marginTop:'10px'
                }}/>
          </Typography>
          <RiToggleLine style={{
            width:'30px',
            height:'30px',
            color:'black',
            marginRight:'20px'
          }}/>
          <MdAccountCircle style={{
            width:'30px',
            height:'30px',
            color:'black'
          }} />
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default Header