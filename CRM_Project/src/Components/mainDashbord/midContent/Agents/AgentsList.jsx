// src/pages/AgentList.jsx

import React from 'react';
import { useDarkMode } from '../../../../context/DarkModeContext';
import { useNavigate } from 'react-router-dom';

const AgentList = () => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();

  const agents = [
    { name: 'Mayank Kumar', mobile: '+91 9944556677' },
    { name: 'Anjali Sharma', mobile: '+91 9876543210' },
    { name: 'Rohit Verma', mobile: '+91 8765432198' },
    { name: 'Sneha Patel', mobile: '+91 9123456780' },
  ];

  const handleViewClick = (agent) => {
   navigate('/mainDashboard/agent-reports', { state: { agent } });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '20px', color: darkMode ? '#fff' : '#000' }}>
        Agents
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
        {agents.map((agent, idx) => (
          <div
            key={idx}
            style={{
              width: '80%',
              height: '115px',
              backgroundColor: darkMode ? '#111828' : '#ffffff',
              border: '2px solid #688CE2',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 30px',
              color: darkMode ? '#fff' : '#000',
            }}
          >
            <div>
              <p style={{ fontSize: '18px', fontWeight: 500, margin: 0 }}>
                Name: {agent.name}
              </p>
              <p style={{ fontSize: '16px', fontWeight: 500, margin: '8px 0 0' }}>
                Mobile No.: {agent.mobile}
              </p>
            </div>

            <button
              onClick={() => handleViewClick(agent)}
              style={{
                width: '150px',
                height: '45px',
                backgroundColor: '#C2E9FB',
                border: '2px solid #688CE2',
                color: '#1B8EC3',
                borderRadius: '50px',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentList;
