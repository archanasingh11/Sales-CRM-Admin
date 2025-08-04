import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useDarkMode } from '../../../../context/DarkModeContext'; // ✅ Changed import and hook usage

const LeadDetails = () => {
  const { darkMode } = useDarkMode(); // ✅ Use the custom hook
  const { id } = useParams();
  const navigate = useNavigate();
  // ... (rest of the component remains the same)

  const details = [
    'Contact Person', 'Rama Swami',
    'Source', 'Calling',
    'Business Type', 'Exporter',
    'Business Volume', 'Did not Disclose',
    'Email', 'threestargofoor@tstdading.in',
    'Mobile No.', '+91 9123456789',
    'Alternate No.', '+91 9222333445',
    'Agent Name', 'Rahul Kumar',
    'Status', 'Demo',
    'Demo Taken', '20 days',
  ];

  const boxStyle = {
    height: 40,
    width: 445,
    background: darkMode ? '#111828' : '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 400,
    color: darkMode ? '#fff' : '#222',
    borderRadius: 4,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    letterSpacing: '0.1em',
    border: darkMode ? '1px solid #333' : 'transparent',
  };

  const addressBoxStyle = {
    ...boxStyle,
    height: 80,
    alignItems: 'flex-start',
    padding: 8,
    whiteSpace: 'pre-line',
  };

  const addressText = `Door No-40/9448 A1,\nKASMISONS ARCADE, NEAR PADMA JUNC,\nERNAKULAM, KERALA`;

  return (
    <div
      style={{
        marginLeft: 40,
        backgroundColor: darkMode ? '#040813' : '#f9f9f9',
        color: darkMode ? '#fff' : '#000',
        padding: 20,
        borderRadius: 12,
        minHeight: '100vh',
      }}
    >
      {/* Back Button & Title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: 24,
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: darkMode ? '#fff' : '#000',
            cursor: 'pointer',
          }}
        >
          <FiArrowLeft size={24} />
        </button>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '0.2em',
          }}
        >
          THREE STAR MARINE EXPORTS
        </h1>
      </div>

      {/* Grid Details */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 445px)',
          rowGap: 20,
          columnGap: 15,
        }}
      >
        {details.map((text, idx) => (
          <div key={idx} style={boxStyle}>
            {text}
          </div>
        ))}

        {/* Address */}
        <div style={boxStyle}>Address</div>
        <div style={addressBoxStyle}>{addressText}</div>

        {/* Remarks (full width) */}
        <div
          style={{
            ...boxStyle,
            gridColumn: '1 / span 2',
            fontWeight: 500,
          }}
        >
          Remarks
        </div>
      </div>

      {/* Status History */}
      <div style={{ display: 'grid', rowGap: 15, marginTop: 30 }}>
        {[
          { date: '22/06/25', status: 'Busy' },
          { date: '05/07/25', status: 'Did Not Pick' },
          { date: '12/08/25', status: 'Converted' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 15 }}>
            <div
              style={{
                flex: '0 0 165px',
                minHeight: 35,
                backgroundColor: '#DDE5F8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: '0.1em',
                padding: '4px 10px',
                borderRadius: 30,
                color: 'black',
              }}
            >
              {item.date}
            </div>
            <div
              style={{
                flex: 1,
                minHeight: 35,
                backgroundColor: '#DDE5F8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: '0.1em',
                padding: '4px 10px',
                borderRadius: 30,
                color: 'black',
              }}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LeadDetails;