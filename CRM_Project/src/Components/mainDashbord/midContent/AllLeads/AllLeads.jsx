import React from 'react';
import { FiSearch } from 'react-icons/fi';

const AllLeads = ({ darkMode }) => {
  const mainBg = '#000';
  const searchBg = '#000';
  const textColor = '#fff';
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 30, background: mainBg, minHeight: '100vh' }}>
      <div style={{
        width: '80%',
        height: 43, // 10% more than 39
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #5BB6F9',
        borderRadius: 50,
        background: searchBg,
        position: 'relative',
        boxSizing: 'border-box',
        marginBottom: 30
      }}>
        <input
          type="text"
          placeholder="Search"
          style={{
            width: 'calc(100% - 70px)',
            height: '100%',
            border: 'none',
            outline: 'none',
            fontSize: 16,
            paddingLeft: 30,
            borderRadius: 50,
            background: 'transparent',
            color: textColor
          }}
        />
        <div style={{
          width: 32, // 20% less than 40
          height: 32,
          borderRadius: '50%',
          background: '#C2E9FB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          right: 5,
          top: '50%',
          transform: 'translateY(-50%)'
        }}>
          <FiSearch size={22} color={textColor} />
        </div>
      </div>

      {/* Three Boxes */}
      {[1,2,3].map((i) => (
        <div key={i} style={{
          width: '75%',
          height: 120,
          background: '#111828',
          border: '2px solid #688CE2',
          borderRadius: 5,
          boxShadow: '0 2px 8px rgba(104,140,226,0.08)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          marginBottom: 30,
          padding: '0 30px'
        }}>
          {/* Left part */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
            <h1 style={{ fontSize: 20, letterSpacing: '0.15em', marginBottom: 10, marginTop: 0, fontWeight: 500, color: textColor }}>THREE STAR MARINE EXPORTS</h1>
            <h5 style={{ fontSize: 16, letterSpacing: '0.10em', margin: 0, marginBottom: 10, fontWeight: 500, color: textColor }}>Name : Rama Swami</h5>
            <h5 style={{ fontSize: 16, letterSpacing: '0.10em', margin: 0, fontWeight: 500, color: textColor }}>Status : Converted</h5>
          </div>
          {/* Right part - view button */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
            <button style={{
              height: 45,
              width: 145,
              background: '#C2E9FB',
              color: '#688CE2',
              border: '2px solid #688CE2',
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer'
            }}>view</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllLeads