import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../../../../../context/DarkModeContext';

const AgentYearly = () => {
  const { darkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const navigate = useNavigate();

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const tableData = [
    { period: 'Jan', totalCalls: 1100, converted: 265, demo: 140, dnp: 350, others: 300 },
    { period: 'Feb', totalCalls: 1050, converted: 240, demo: 130, dnp: 320, others: 290 },
    { period: 'Mar', totalCalls: 1200, converted: 270, demo: 160, dnp: 340, others: 310 },
  ];

  const totals = tableData.reduce(
    (acc, row) => ({
      totalCalls: acc.totalCalls + row.totalCalls,
      converted: acc.converted + row.converted,
      demo: acc.demo + row.demo,
      dnp: acc.dnp + row.dnp,
      others: acc.others + row.others,
    }),
    { totalCalls: 0, converted: 0, demo: 0, dnp: 0, others: 0 }
  );

  const dummyLeads = {
    July: [
      { id: 1, name: 'Ajay Kumar', status: 'Converted' },
      { id: 2, name: 'Meera Sharma', status: 'DNP' },
    ],
    June: [
      { id: 3, name: 'Rajiv Ranjan', status: 'Demo' },
      { id: 4, name: 'Pooja Nair', status: 'Busy' },
    ],
  };

  return (
    <Box p={3}>
      {/* Outer container */}
      <Box
        sx={{
          backgroundColor: darkMode ? '#111828' : '#fff',
          border: '1px solid #688CE2',
          borderRadius: 2,
          p: 3,
          mb: 4,
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={600}
          mb={1}
          color={darkMode ? 'white' : 'black'}
        >
          Detailed Breakdown
        </Typography>

        {/* Dropdown section */}
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography
            fontSize={16}
            fontWeight={500}
            color={darkMode ? 'white' : 'gray'}
          >
            Summary Performance – Yearly
          </Typography>

          <Select
            value={selectedYear}
            onChange={handleYearChange}
            size="small"
            sx={{
              backgroundColor: '#DDE5F8',
              borderRadius: 1,
              height: 30,
              fontSize: 14,
              minWidth: 120,
            }}
          >
            {Array.from({ length: 6 }, (_, i) => currentYear - i).map((year) => (
              <MenuItem key={year} value={year} sx={{ color: 'black' }}>
                {year}
              </MenuItem>
            ))}
            {Array.from({ length: 3 }, (_, i) => currentYear + i + 1).map((year) => (
              <MenuItem
                key={year}
                value={year}
                disabled
                sx={{ backgroundColor: '#DDE5F8', color: 'gray' }}
              >
                {year}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Table */}
        <Paper
          elevation={0}
          sx={{
            overflowX: 'auto',
            backgroundColor: 'transparent',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {['Period', 'Total Calls', 'Converted', 'Demo', 'DNP', 'Others'].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: darkMode ? 'white' : 'black',
                      borderBottom: '1px solid #688CE2',
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.period}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.totalCalls}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.converted}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.demo}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.dnp}</TableCell>
                  <TableCell sx={{ color: darkMode ? 'white' : 'black' }}>{row.others}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>{totals.totalCalls}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>{totals.converted}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>{totals.demo}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>{totals.dnp}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: darkMode ? 'white' : 'black' }}>{totals.others}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Box>

      {/* Monthly Lead Sections */}
      {Object.entries(dummyLeads).map(([month, leads]) => (
        <Box
          key={month}
          sx={{
            backgroundColor: darkMode ? '#111828' : '#fff',
            border: '1px solid #688CE2',
            borderRadius: 2,
            p: 2,
            mb: 4,
          }}
        >
          <Typography
            fontSize={16}
            fontWeight={600}
            mb={2}
            color={darkMode ? 'white' : 'black'}
          >
            {month}
          </Typography>

          {leads.map((lead, idx) => (
            <Box
              key={idx}
              sx={{
                width: '100%',
                height: 130,
                borderRadius: 2,
                backgroundColor: darkMode ? '#111828' : 'white',
                border: '1px solid #688CE2',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 3,
                mb: 2,
              }}
            >
              <Box>
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  letterSpacing="0.15em"
                  mb={1}
                  color={darkMode ? 'white' : 'black'}
                >
                  THREE STAR MARINE EXPORTS
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  letterSpacing="0.1em"
                  color={darkMode ? 'white' : 'black'}
                >
                  Name : {lead.name}
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  letterSpacing="0.1em"
                  color={darkMode ? 'white' : 'black'}
                >
                  Status : {lead.status}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() => navigate(`/mainDashboard/lead-details/${lead.id}`)}
                sx={{
                  height: 45,
                  width: 150,
                  borderRadius: '50px',
                  backgroundColor: '#C2E9FB',
                  borderColor: '#688CE2',
                  color: '#688CE2',
                  fontWeight: 600,
                }}
              >
                View
              </Button>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default AgentYearly;
