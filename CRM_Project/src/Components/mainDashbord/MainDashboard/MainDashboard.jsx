import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Dashboard from '../midContent/adminDashboard/AdminDashboard';
import AdminDashboard from '../midContent/adminDashboard/AdminDashboard';



const SIDEBAR_WIDTH = 260;
const COLLAPSED_WIDTH = 64;
const HEADER_HEIGHT = 90;

const MainDashboard = () => {
  const [collapsed, setCollapsed] = React.useState(false);
  const sidebarWidth = collapsed ? COLLAPSED_WIDTH : SIDEBAR_WIDTH;
  return (
    <div style={{ backgroundColor: '#F4F7FB', minHeight: '100vh' }}>
      {/* Fixed Header */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1300, height: HEADER_HEIGHT, background: '#fff' }}>
        <Header />
      </div>
      {/* Sidebar and Main Content */}
      <div style={{ display: 'flex' }}>
        {/* Fixed Sidebar */}
        <div style={{ width: sidebarWidth, minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>
        {/* Main Content Area */}
        <div style={{ flex: 1, marginTop: HEADER_HEIGHT, paddingLeft: '20px', boxSizing: 'border-box', paddingRight:'30px'}}>
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard