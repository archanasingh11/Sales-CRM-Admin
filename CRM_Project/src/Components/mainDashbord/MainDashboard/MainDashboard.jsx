import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

const SIDEBAR_WIDTH = 260;
const COLLAPSED_WIDTH = 64;
const HEADER_HEIGHT = 80;

const MainDashboard = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH;

  return (
    <div style={{ backgroundColor: darkMode ? '#111828' : '#F4F7FB', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1300,
        height: HEADER_HEIGHT,
        background: darkMode ? '#111828' : '#fff'
      }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Sidebar and Main Content */}
      <div style={{ display: 'flex' }}>
        <div style={{
          width: sidebarWidth,
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          marginTop: HEADER_HEIGHT
        }}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} darkMode={darkMode} />
        </div>

        <div style={{
          flex: 1,
          marginTop: HEADER_HEIGHT,
          padding: '20px 30px',
          boxSizing: 'border-box',
          background: darkMode ? '#000' : '#fff'
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
