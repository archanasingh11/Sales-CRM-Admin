import React, { useState } from 'react';
import { useDarkMode } from '../../../../context/DarkModeContext';
import ReportToday from './AgentReports/AgentToday';
import ReportWeekly from './AgentReports/AgentWeekly';
import ReportMonthly from './AgentReports/AgentMonthly';
import ReportYearly from './AgentReports/AgentYearly';
import PersonIcon from '@mui/icons-material/Person';

const AgentReport = ({ isSidebarCollapsed }) => {
  const { darkMode } = useDarkMode();
  const [selectedView, setSelectedView] = useState('today');

  const renderReport = () => {
    switch (selectedView) {
      case 'today':
        return <ReportToday />;
      case 'weekly':
        return <ReportWeekly />;
      case 'monthly':
        return <ReportMonthly />;
      case 'yearly':
        return <ReportYearly />;
      default:
        return null;
    }
  };

  const buttonColors = {
    today: {
      background: '#EBF5FF',
      border: '#74ACE3',
      shadow: '0 4px 10px rgba(116, 172, 227, 0.75)',
    },
    weekly: {
      background: '#F4EDFF',
      border: '#B48FEF',
      shadow: '0 4px 10px rgba(180, 143, 239, 0.75)',
    },
    monthly: {
      background: '#E8FFF9',
      border: '#75C8B3',
      shadow: '0 4px 10px rgba(117, 200, 179, 0.75)',
    },
    yearly: {
      background: '#FFF7EC',
      border: '#D1B184',
      shadow: '0 4px 10px rgba(209, 177, 132, 0.75)',
    },
  };

  const buttonStyle = (view) => {
    const colorSet = buttonColors[view];
    return {
      backgroundColor: colorSet.background,
      border: `2px solid ${colorSet.border}`,
      color: darkMode ? '#000' : '#333',
      fontWeight: 500,
      width: '200px',
      height: '55px', // 10% more height
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: selectedView === view ? colorSet.shadow : 'none',
      marginTop:'5px'
    };
  };

  return (
    <div
      style={{
        width: isSidebarCollapsed ? '100%' : '90%',
        marginLeft: isSidebarCollapsed ? '10%' : 'auto',
        marginRight: isSidebarCollapsed ? '10%' : 'auto',
        padding: '0 20px 20px 20px', // reduced top margin
        transition: 'all 0.3s ease',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      {/* Profile Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: '-5px',
          marginBottom: '30px',
          gap: '10px',
          
        }}
      >
        <div
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            backgroundColor: darkMode ? '#fff' : '#111828',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: darkMode ? '#111828' : '#fff',
          }}
        >
          <PersonIcon />
        </div>
        <span style={{ fontSize: 16, fontWeight: 500 }}>Mayank Kumar</span>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '25px',
        }}
      >
        {['today', 'weekly', 'monthly', 'yearly'].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            style={buttonStyle(view)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = buttonColors[view].shadow;
            }}
            onMouseLeave={(e) => {
              if (selectedView !== view) {
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div>
        {renderReport()}
      </div>
    </div>
  );
};

export default AgentReport;
