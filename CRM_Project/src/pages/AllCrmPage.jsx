// src/pages/AllCrmPage.jsx

import React from 'react';
import { Grid, Card, CardMedia, CardActionArea, Box, Typography } from '@mui/material';
import DashboardLayout from '../layouts/DashboardLayout'; // Import the layout

// Import your images
import GoldCrmImage from '../assets/gold.jpg';
import SilverCrmImage from '../assets/silver.jpg';
import ClockCrmImage from '../assets/clock.jpg';

const crmData = [
  { title: 'Gold CRM', image: GoldCrmImage },
  { title: 'Silver CRM', image: SilverCrmImage },
  { title: 'Clock CRM', image: ClockCrmImage },
];

const AllCrmPage = () => {
  return (
    // Step 1: Wrap your page content with the layout
    <DashboardLayout>
      {/* Step 2: Define only the content for this specific page */}
      <Grid container spacing={4}>
        {crmData.map((crm, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: '16px', position: 'relative' }}>
              <CardActionArea>
                <CardMedia component="img" height="180" image={crm.image} alt={crm.title} />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                  }}
                >
                  <Typography variant="h6">{crm.title}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DashboardLayout>
  );
};

export default AllCrmPage;