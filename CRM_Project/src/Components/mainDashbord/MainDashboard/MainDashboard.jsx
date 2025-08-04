// src/Components/mainDashbord/MainDashboard/MainDashboard.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';

import { useDarkMode } from '../../../context/DarkModeContext';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const SIDEBAR_WIDTH = 260;
const COLLAPSED_WIDTH = 64;
const HEADER_HEIGHT = 80;

const MainDashboard = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <div style={{ backgroundColor: darkMode ? '#040813' : '#F4F7FB', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1300,
          height: HEADER_HEIGHT,
          background: darkMode ? '#040813' : '#fff',
        }}
      >
        <Header darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>

      {/* Sidebar and Main Content */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div
          style={{
            width: sidebarWidth,
            minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
            marginTop: HEADER_HEIGHT,
          }}
        >
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} darkMode={darkMode} />
        </div>

        {/* Main Content */}
        <div
          style={{
            flex: 1,
            marginTop: HEADER_HEIGHT,
            padding: '20px 30px',
            boxSizing: 'border-box',
            background: darkMode ? '#040813' : '#F4F7FB',
          }}
        >
          {/* Provide darkMode and sidebarCollapsed to child components via Outlet context */}
          <Outlet context={{ darkMode, sidebarCollapsed: collapsed }} />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
