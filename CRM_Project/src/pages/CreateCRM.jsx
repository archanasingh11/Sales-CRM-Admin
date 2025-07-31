// src/pages/CreateCrmPage.jsx

import React, { useState } from 'react';
import {
  Box, Button, Grid, Paper, TextField, Typography, Dialog,
  DialogActions, DialogContent, DialogTitle, IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { SketchPicker } from 'react-color'; // Import the color picker
import DashboardLayout from '../layouts/DashboardLayout';

// Initial state for the dispositions
const initialDispositions = [
    { label: 'Demo', color: 'rgba(173, 216, 230, 0.3)', borderColor: 'rgba(173, 216, 230, 1)' },
    { label: 'Converted', color: 'rgba(255, 255, 224, 0.4)', borderColor: 'rgba(255, 255, 0, 1)' },
    { label: 'Dormants', color: 'rgba(144, 238, 144, 0.3)', borderColor: 'rgba(144, 238, 144, 1)' },
    { label: 'Not Interested', color: 'rgba(255, 182, 193, 0.3)', borderColor: 'rgba(255, 182, 193, 1)' },
    { label: 'E-mail', color: 'rgba(221, 160, 221, 0.3)', borderColor: 'rgba(221, 160, 221, 1)' },
    { label: 'Wrong Number', color: 'rgba(175, 238, 238, 0.3)', borderColor: 'rgba(175, 238, 238, 1)' },
    { label: 'Busy', color: 'rgba(255, 192, 203, 0.3)', borderColor: 'rgba(255, 192, 203, 1)' },
];

const CreateCrmPage = () => {
  // State for the list of dispositions so it can be updated
  const [dispositions, setDispositions] = useState(initialDispositions);
  
  // State for managing the modal dialog
  const [open, setOpen] = useState(false);
  
  // State for the new bucket form
  const [newBucketName, setNewBucketName] = useState('');
  const [newBucketColor, setNewBucketColor] = useState({ r: 200, g: 200, b: 200, a: 0.3 });
  
  // State for showing/hiding the color picker
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowColorPicker(false); // Hide color picker when modal closes
  };

  const handleAddNewBucket = () => {
    if (!newBucketName) return; // Basic validation
    
    const newDisposition = {
      label: newBucketName,
      color: `rgba(${newBucketColor.r}, ${newBucketColor.g}, ${newBucketColor.b}, ${newBucketColor.a})`,
      borderColor: `rgba(${newBucketColor.r}, ${newBucketColor.g}, ${newBucketColor.b}, 1)`,
    };

    setDispositions([...dispositions, newDisposition]);
    setNewBucketName(''); // Reset form
    handleClose(); // Close the modal
  };

  return (
    <DashboardLayout>
      {/* Header section remains the same */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 4 }}>
        <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: '12px' }}>
          Add Lead
        </Button>
      </Box>

      {/* CRM Name Input remains the same */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, ml: 2 }}>
        <Typography variant="h6" sx={{ mr: 2, fontWeight: '600' }}>CRM Name :</Typography>
        <TextField variant="outlined" size="small" sx={{ width: '300px', '& .MuiOutlinedInput-root': { borderRadius: '12px' } }} />
      </Box>

      {/* Dispositions Grid now maps from state */}
      <Grid container spacing={3} sx={{ px: 2 }}>
        {dispositions.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.label}>
            <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', borderRadius: '16px', cursor: 'pointer', backgroundColor: item.color, borderColor: item.borderColor, '&:hover': { boxShadow: 3 } }}>
              <Typography variant="subtitle1" fontWeight="500">{item.label}</Typography>
            </Paper>
          </Grid>
        ))}
        {/* Add New Disposition Button now opens the modal */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper onClick={handleClickOpen} variant="outlined" sx={{ p: 3, textAlign: 'center', borderRadius: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', borderStyle: 'dashed', '&:hover': { boxShadow: 3, borderColor: 'primary.main' } }}>
            <AddIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
          </Paper>
        </Grid>
      </Grid>
      
      {/* Submit Button remains the same */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <Button variant="contained" size="large" sx={{ borderRadius: '16px', px: 5 }}>Submit</Button>
      </Box>

      {/* The Modal Dialog for creating a new bucket */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create New Bucket</DialogTitle>
        <DialogContent sx={{ pt: 1 }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bucket Name"
            type="text"
            fullWidth
            variant="outlined"
            value={newBucketName}
            onChange={(e) => setNewBucketName(e.target.value)}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <Typography>Bucket Color:</Typography>
            <IconButton onClick={() => setShowColorPicker(!showColorPicker)}>
              <ColorLensIcon />
            </IconButton>
          </Box>
          {showColorPicker && (
            <Box sx={{ position: 'absolute', zIndex: '2' }}>
              <SketchPicker 
                color={newBucketColor} 
                onChangeComplete={(color) => setNewBucketColor(color.rgb)} 
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewBucket} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default CreateCrmPage;