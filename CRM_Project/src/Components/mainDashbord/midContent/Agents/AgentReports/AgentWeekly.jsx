import React from 'react';
import { useDarkMode } from '../../../../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const AgentWeekly = () => {
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

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    border: `1px solid ${darkMode ? '#fff' : '#000'}`,
  };

  const thTdStyle = {
    padding: '12px 16px',
    fontSize: '16px',
    fontWeight: 500,
    textAlign: 'left',
    borderBottom: `1px solid ${darkMode ? '#fff' : '#000'}`,
  };

  const tdRegular = {
    ...thTdStyle,
    fontWeight: 400,
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
    letterSpacing: '0.15em',
  };

  const nameStyle = {
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '5px',
    letterSpacing: '0.10em',
  };

  const statusStyle = {
    fontSize: '16px',
    fontWeight: 400,
    letterSpacing: '0.10em',
  };

  const viewButtonStyle = {
    height: '45px',
    width: '155px',
    borderRadius: '50px',
    backgroundColor: '#C2E9FB',
    color: '#688CE2',
    border: '1px solid #688CE2',
    fontWeight: 500,
    cursor: 'pointer',
  };

  return (
    <div style={{ width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
      {/* Main container */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Detailed breakdown</h2>
        <p style={subtextStyle}>Performance Summary - Weekly</p>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Period</th>
              <th style={thTdStyle}>Total Calls</th>
              <th style={thTdStyle}>Converted</th>
              <th style={thTdStyle}>Demo</th>
              <th style={thTdStyle}>DNP</th>
              <th style={thTdStyle}>Others</th>
            </tr>
          </thead>
          <tbody>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <tr key={day}>
                <td style={tdRegular}>{day}</td>
                <td style={tdRegular}>{Math.floor(Math.random() * 100)}</td>
                <td style={tdRegular}>{Math.floor(Math.random() * 30)}</td>
                <td style={tdRegular}>{Math.floor(Math.random() * 30)}</td>
                <td style={tdRegular}>{Math.floor(Math.random() * 30)}</td>
                <td style={tdRegular}>{Math.floor(Math.random() * 30)}</td>
              </tr>
            ))}
            <tr>
              <td style={tdRegular}>Total</td>
              <td style={tdRegular}>300</td>
              <td style={tdRegular}>120</td>
              <td style={tdRegular}>80</td>
              <td style={tdRegular}>60</td>
              <td style={tdRegular}>40</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Lead Boxes */}
      {[1, 2, 3].map((id) => (
        <div key={id} style={boxStyle}>
          <div style={leftContentStyle}>
            <div style={titleStyle}>THREE STAR MARINE EXPORTS</div>
            <div style={nameStyle}>Name : Rama Swami</div>
            <div style={statusStyle}>Status : Converted</div>
          </div>

          <button
            style={viewButtonStyle}
            onClick={() => navigate(`/mainDashboard/lead-details/${id}`)}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default AgentWeekly;
