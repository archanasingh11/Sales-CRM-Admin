// src/pages/CreateCrmPage.jsx

import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { SketchPicker } from 'react-color';
import DashboardLayout from '../layouts/DashboardLayout';

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
  const [dispositions, setDispositions] = useState(initialDispositions);
  const [open, setOpen] = useState(false);
  const [newBucketName, setNewBucketName] = useState('');
  const [newBucketColor, setNewBucketColor] = useState({ r: 200, g: 200, b: 200, a: 0.3 });
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedBuckets, setSelectedBuckets] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSelectBucket = (label) => {
    setSelectedBuckets((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowColorPicker(false);
  };

  const handleAddNewBucket = () => {
    if (!newBucketName) return;
    const newDisposition = {
      label: newBucketName,
      color: `rgba(${newBucketColor.r}, ${newBucketColor.g}, ${newBucketColor.b}, ${newBucketColor.a})`,
      borderColor: `rgba(${newBucketColor.r}, ${newBucketColor.g}, ${newBucketColor.b}, 1)`,
    };
    setDispositions((prev) => [...prev, newDisposition]);
    setSelectedBuckets((prev) => [...prev, newBucketName]);
    setNewBucketName('');
    handleClose();
  };

  return (
    <DashboardLayout>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
          <Button variant="contained" startIcon={<AddIcon />} sx={{ borderRadius: 2 }}>
            Add Lead
          </Button>
        </Box>

        {/* CRM Name Input */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', mb: 4 }}>
          <Typography variant="h6" sx={{ mr: 2, fontWeight: 600 }}>
            CRM Name:
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ width: isMobile ? '100%' : '300px', borderRadius: 2 }}
          />
        </Box>

        {/* Disposition Buckets */}
        <Grid container spacing={3}>
          {dispositions.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.label}>
              <Paper
                variant="outlined"
                onClick={() => handleSelectBucket(item.label)}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  cursor: 'pointer',
                  backgroundColor: item.color,
                  borderColor: selectedBuckets.includes(item.label)
                    ? 'primary.main'
                    : item.borderColor,
                  borderWidth: selectedBuckets.includes(item.label) ? 3 : 1,
                  borderStyle: 'solid',
                  boxShadow: selectedBuckets.includes(item.label) ? 6 : 1,
                  position: 'relative',
                  '&:hover': { boxShadow: 3 },
                }}
              >
                <Typography variant="subtitle1" fontWeight={500}>
                  {item.label}
                </Typography>
                {selectedBuckets.includes(item.label) && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      width: 20,
                      height: 20,
                      bgcolor: 'primary.main',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '14px' }}>✓</Typography>
                  </Box>
                )}
              </Paper>
            </Grid>
          ))}

          {/* Add New Disposition */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper
              onClick={handleClickOpen}
              variant="outlined"
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderStyle: 'dashed',
                '&:hover': { boxShadow: 3, borderColor: 'primary.main' },
              }}
            >
              <AddIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            </Paper>
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <Button variant="contained" size="large" sx={{ borderRadius: 3, px: 5 }}>
            Submit
          </Button>
        </Box>
      </Box>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Create New Bucket</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Bucket Name"
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
            <Box sx={{ mt: 2 }}>
              <SketchPicker
                color={newBucketColor}
                onChangeComplete={(color) => setNewBucketColor(color.rgb)}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddNewBucket} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
};

export default CreateCrmPage;
