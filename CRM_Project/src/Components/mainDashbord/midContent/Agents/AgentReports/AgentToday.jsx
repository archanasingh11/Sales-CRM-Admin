import React from 'react';
import { useDarkMode } from '../../../../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const AgentToday = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const containerStyle = {
    border: `1px solid ${darkMode ? '#fff' : '#000'}`,
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
    backgroundColor: darkMode ? '#111828' : '#fff',
    color: darkMode ? '#fff' : '#000',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '20px',
    fontWeight: 500,
  };

  const subtextStyle = {
    fontSize: '14px',
    fontWeight: 400,
    color: darkMode ? '#ccc' : 'gray',
    marginTop: '5px',
  };

  const thStyle = {
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
    padding: '10px 20px 10px 0',
  };

  const tdStyle = {
    fontSize: '16px',
    fontWeight: 400,
    padding: '10px 20px 10px 0',
  };

  const boxStyle = {
    height: '130px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #688CE2',
    backgroundColor: darkMode ? '#111828' : '#fff',
    color: darkMode ? '#fff' : '#000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginTop: '20px',
    boxSizing: 'border-box',
  };

  const leftContentStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 500,
    marginBottom: '10px',
    letterSpacing: '0.15em', // 15%
  };

  const nameStyle = {
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '5px',
    letterSpacing: '0.10em', // 10%
  };

  const statusStyle = {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.10em', // 10%
  };

  const viewButtonStyle = {
    width: '155px',
    height: '45px',
    backgroundColor: '#C2E9FB',
    border: '1px solid #688CE2',
    color: '#688CE2',
    borderRadius: '25px',
    fontWeight: 700,
    fontSize: '14px',
    cursor: 'pointer',
  };

  return (
    <div style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
      {/* Summary Container */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Detailed breakdown</h2>
        <p style={subtextStyle}>Today Performance summary</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${darkMode ? '#fff' : '#000'}` }}>
              <th style={thStyle}>Period</th>
              <th style={thStyle}>Total Calls</th>
              <th style={thStyle}>Converted</th>
              <th style={thStyle}>Demo</th>
              <th style={thStyle}>DNP</th>
              <th style={thStyle}>Others</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Today</td>
              <td style={tdStyle}>50</td>
              <td style={tdStyle}>12</td>
              <td style={tdStyle}>8</td>
              <td style={tdStyle}>15</td>
              <td style={tdStyle}>10</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lead Boxes */}
      {[1, 2, 3].map((_, idx) => (
        <div key={idx} style={boxStyle}>
          <div style={leftContentStyle}>
            <div style={titleStyle}>THREE STAR MARINE EXPORTS</div>
            <div style={nameStyle}>Name : Rama Swami</div>
            <div style={statusStyle}>Status : Converted</div>
          </div>

          <button
            style={viewButtonStyle}
            onClick={() => navigate('/mainDashboard/lead-details/1')}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default AgentToday;
