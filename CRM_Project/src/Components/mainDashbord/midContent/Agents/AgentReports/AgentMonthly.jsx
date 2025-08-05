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

const AgentMonthly = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonth = months[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const tableData = [
    { period: 'Week 1', totalCalls: 300, converted: 72, demo: 40, dnp: 95, others: 80 },
    { period: 'Week 2', totalCalls: 310, converted: 74, demo: 42, dnp: 97, others: 83 },
    { period: 'Week 3', totalCalls: 320, converted: 78, demo: 45, dnp: 100, others: 85 },
    { period: 'Week 4', totalCalls: 315, converted: 76, demo: 43, dnp: 98, others: 33 },
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

  const dummyData = {
    Monday: [
      { id: 1, name: 'Rama Swami', status: 'Converted' },
      { id: 2, name: 'Ajay Verma', status: 'Demo' },
    ],
    Tuesday: [
      { id: 3, name: 'Suresh Kumar', status: 'DNP' },
      { id: 4, name: 'Amit Singh', status: 'Converted' },
      { id: 5, name: 'Neha Verma', status: 'Busy' },
    ],
    Wednesday: [
      { id: 6, name: 'Ravi Raj', status: 'Demo' },
    ],
  };

  return (
    <Box p={3}>
      {/* Main Container */}
      <Box
        sx={{
          backgroundColor: darkMode ? '#111828' : '#fff',
          border: `1px solid ${darkMode ? '#688CE2' : 'black'}`,
          borderRadius: 2,
          p: 3,
          mb: 4,
        }}
      >
        <Typography fontSize={20} fontWeight={600} mb={1} color={darkMode ? 'white' : 'black'}>
          Detailed Breakdown
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mt={0.5} mb={2}>
          <Typography fontSize={16} fontWeight={500} color={darkMode ? 'white' : 'gray'}>
            Performance Summary –
          </Typography>

          <Select
            value={selectedMonth}
            onChange={handleMonthChange}
            size="small"
            sx={{
              backgroundColor: '#DDE5F8',
              borderRadius: 1,
              height: 30,
              fontSize: 14,
              color: 'black',
            }}
          >
            {months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Table */}
        <Paper elevation={0} sx={{ overflowX: 'auto', backgroundColor: 'transparent' }}>
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
                      borderBottom: `1px solid ${darkMode ? '#688CE2' : '#e0e0e0'}`,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
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

      {/* Weekly Data Boxes */}
      {Object.entries(dummyData).map(([day, agents]) => (
        <Box
          key={day}
          sx={{
            border: '1px solid #688CE2',
            borderRadius: 2,
            p: 2,
            mb: 4,
          }}
        >
          <Typography fontWeight={600} fontSize={16} mb={2} color={darkMode ? 'white' : 'black'}>
            {day}
          </Typography>

          {agents.map((agent) => (
            <Box
              key={agent.id}
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
                  Name : {agent.name}
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  letterSpacing="0.1em"
                  color={darkMode ? 'white' : 'black'}
                >
                  Status : {agent.status}
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={() => navigate(`/mainDashboard/lead-details/${agent.id}`)}
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

export default AgentMonthly;
