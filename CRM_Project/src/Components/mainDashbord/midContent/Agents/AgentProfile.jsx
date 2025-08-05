import React, { useRef, useState } from 'react';
import { useDarkMode } from '../../../../context/DarkModeContext';
import { FiArrowLeft } from 'react-icons/fi';
import MenuIcon from '@mui/icons-material/Menu';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  IconButton,
  Avatar,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

const AgentProfile = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [editable, setEditable] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const [profileData, setProfileData] = useState({
    name: 'Mayank Kumar',
    mobile: '+91 9988776655',
    email: 'Mayank@gmail.com',
    doj: '26/06/2025',
    gender: 'Male',
    password: 'Abc@123',
    address: 'Opposite to DC office hazaribag',
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleFieldChange = (key, value) => {
    setProfileData((prev) => ({ ...prev, [key]: value }));
  };

  const handleEditProfile = () => {
    setEditable(true);
    setMenuOpen(false);
  };

  const saveChanges = () => {
    setEditable(false);
  };

  const menuItems = [
    { label: 'Edit Profile', action: handleEditProfile },
    { label: 'Change Password', action: () => alert('Change Password') },
    { label: 'Move to CRM', action: () => alert('Move to CRM') },
    { label: 'Delete', action: () => alert('Delete') },
    { label: 'Block', action: () => alert('Blocked'), isBlock: true },
  ];

  const labelStyle = {
    width: '396px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(128, 128, 128, 0.2)',
    borderRadius: '5px',
    border: darkMode ? '1px solid #688CE2' : 'none',
    color: darkMode ? '#fff' : '#000',
    background: darkMode ? '#111828' : '#fff',
  };

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? '#111828' : '#F7FAFC',
        minHeight: '100vh',
        padding: '20px',
        color: darkMode ? '#fff' : '#000',
        position: 'relative',
      }}
    >
      {/* Top Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton onClick={handleBack}>
          <FiArrowLeft style={{ color: darkMode ? '#fff' : '#000', marginLeft: '20px' }} />
        </IconButton>
        <IconButton onClick={handleMenu}>
          <MenuIcon style={{ color: darkMode ? '#fff' : '#000', marginRight: '40px' }} />
        </IconButton>
      </Box>

      {/* Profile Image */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            src={profileImage}
            alt="Profile"
            sx={{
              width: 120,
              height: 120,
              border: `2px solid ${darkMode ? '#688CE2' : '#1976d2'}`,
            }}
          />
          <IconButton
            onClick={handleImageClick}
            sx={{
              position: 'absolute',
              bottom: -10,
              right: -10,
              width: 50,
              height: 50,
              backgroundColor: '#fff',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
              borderRadius: '50%',
              zIndex: 1,
              '&:hover': {
                backgroundColor: '#fff',
              },
            }}
          >
            <CameraAltIcon style={{ fontSize: 24, color: '#555' }} />
          </IconButton>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </Box>
      </Box>

      {/* Profile Fields */}
      <Box
        sx={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {[
          ['Name', profileData.name, 'name'],
          ['Mobile No.', profileData.mobile, 'mobile'],
          ['Email', profileData.email, 'email'],
          ['Date of Joining', profileData.doj, 'doj'],
          ['Gender', profileData.gender, 'gender'],
          ['Password', profileData.password, 'password'],
          ['Address', profileData.address, 'address'],
        ].map(([label, value, key], index) => (
          <Box key={index} sx={{ display: 'flex', gap: '20px' }}>
            <Box sx={labelStyle}>
              <Typography>{label}</Typography>
            </Box>
            {editable ? (
              <TextField
                variant="outlined"
                value={value}
                multiline={key === 'address'}
                rows={key === 'address' ? 4 : 1}
                onChange={(e) => handleFieldChange(key, e.target.value)}
                sx={{
                  width: '396px',
                  height: key === 'address' ? '100px' : '45px',
                  background: darkMode ? '#111828' : '#fff',
                  color: darkMode ? '#fff' : '#000',
                  borderRadius: '5px',
                  input: { color: darkMode ? '#fff' : '#000' },
                  '& fieldset': {
                    borderColor: darkMode ? '#688CE2' : '#ccc',
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  ...labelStyle,
                  height: key === 'address' ? '100px' : '45px',
                  width: '396px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  display: 'flex',
                }}
              >
                <Typography>{value}</Typography>
              </Box>
            )}
          </Box>
        ))}
        {editable && (
          <Button
            variant="contained"
            sx={{ marginTop: '10px' }}
            onClick={saveChanges}
          >
            Save Changes
          </Button>
        )}
      </Box>

      {/* Menu Box */}
      {menuOpen && (
        <Paper
          sx={{
            position: 'absolute',
            top: 80,
            right: 40,
            backgroundColor: darkMode ? '#111828' : '#fff',
            color: darkMode ? '#fff' : '#000',
            border: darkMode ? '1px solid #688CE2' : '1px solid #ccc',
            borderRadius: '10px',
            width: 200,
            padding: '10px',
            zIndex: 10,
          }}
        >
          {menuItems.map((item, index) => (
            <Typography
              key={index}
              onClick={item.action}
              sx={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
                color: item.isBlock ? 'red' : darkMode ? '#fff' : '#000',
                '&:hover': {
                  backgroundColor: darkMode ? '#1e293b' : '#f0f0f0',
                },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Paper>
      )}
    </Box>
  );
};

export default AgentProfile;
