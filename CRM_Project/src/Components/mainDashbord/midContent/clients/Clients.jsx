import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const clientCounts = {
  Converted: 77,
  Demo: 700,
  'Future Client': 68,
  'Not interested': 75,
  'Did not pick': 56,
  'E-mails': 38,
  Later: 60,
  Busy: 154,
  Dormant: 45,
  'Wrong Number': 87,
};

const Clients = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const count = clientCounts[type] || 0;

  return (
    <Box sx={{ pl: 3 }}>
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          mt: 3,
          ml: '30px',
          fontWeight: 500,
        }}
      >
        {type} - {count}
      </Typography>

      {/* Search Bar */}
      <Box
        sx={{
          width: '900px',
          height: '48px',
          backgroundColor: '#fff',
          border: '2px solid #5BB6F9',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          mx: 'auto',
          mb: 4,
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            width: '90%',
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            backgroundColor: 'transparent',
          }}
        />

        {/* Search Icon */}
        <Box
          sx={{
            width: 32,
            height: 32,
            backgroundColor: '#C2E9FB',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SearchIcon sx={{ fontSize: 24, color: '#5BB6F9' }} />
        </Box>
      </Box>

      {/* Client Cards */}
      {Array.from({ length: 3 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            width: '80%',
            height: 135,
            backgroundColor: '#fff',
            border: '2px solid #688CE2',
            borderRadius: '5px',
            mb: 3,
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
          }}
        >
          {/* Client Details */}
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                letterSpacing: '0.15em',
                fontWeight: 500,
              }}
            >
              THREE STAR MARINE EXPORTS
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                letterSpacing: '0.1em',
                fontWeight: 500,
                mt: 1,
              }}
            >
              Name : Rama Swami
            </Typography>
            <Typography
              sx={{
                fontSize: 16,
                letterSpacing: '0.1em',
                fontWeight: 500,
              }}
            >
              Status : {type}
            </Typography>
          </Box>

          {/* View Button */}
          <Button
            onClick={() => navigate(`/mainDashboard/lead-details/${index + 1}`)}
            sx={{
              width: 155,
              height: 45,
              borderRadius: '50px',
              backgroundColor: '#C2E9FB',
              border: '2px solid #688CE2',
              color: '#1B8EC3',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            View
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Clients;
