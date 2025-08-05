import React from 'react';
// import { useOutletContext } from 'react-router-dom';
import { useDarkMode } from '../../../../context/DarkModeContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line
} from 'recharts';

import demoImg from '../../../../assets/demoIcon.png';
import convertedImg from '../../../../assets/convertedIcon.png';
import busyImg from '../../../../assets/busyIcon.png';
import dnpImg from '../../../../assets/dnpIcon.png';

const BOX_HEIGHT = Math.round(153 * 0.7);
const BOX_WIDTH = 245;
const BOX_WIDTH_EXPANDED = Math.round(BOX_WIDTH * 1.2);
const BOX_HEIGHT_EXPANDED = Math.round(BOX_HEIGHT * 1.2);

const StatBox = ({ title, count, imgSrc, width, height, darkMode }) => (
  <div
    style={{
      height,
      width,
      background: darkMode ? '#111828' : '#fff',
      borderRadius: '16px',
      boxShadow: '6px 6px 10px rgba(27, 89, 248, 0.3)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '24px',
      overflow: 'hidden',
      border: darkMode ? '2px solid #688CE2' : 'none',
    }}
  >
    <div style={{ fontSize: 16, fontWeight: 500, color: darkMode ? '#fff' : '#222', opacity: 0.7 }}>{title}</div>
    <div style={{ fontSize: 24, fontWeight: 600, color: darkMode ? '#fff' : '#000', alignSelf: 'center', margin: 'auto 0' }}>{count}</div>
    <img src={imgSrc} alt={title} style={{ position: 'absolute', right: 0, bottom: 0, width: 74, height: 74, objectFit: 'contain', opacity: 0.8 }} />
  </div>
);

const AdminDashboard = () => {
  const { darkMode } = useDarkMode();
  const sidebarCollapsed = false;

  const boxWidth = sidebarCollapsed ? BOX_WIDTH_EXPANDED : BOX_WIDTH;
  const boxHeight = sidebarCollapsed ? BOX_HEIGHT_EXPANDED : BOX_HEIGHT;
  const gap = sidebarCollapsed ? 64 : 32;

  const barData = [
    { month: 'Jan', converted: 30 },
    { month: 'Feb', converted: 50 },
    { month: 'Mar', converted: 75 },
    { month: 'Apr', converted: 40 },
    { month: 'May', converted: 90 },
    { month: 'Jun', converted: 65 },
    { month: 'Jul', converted: 80 },
    { month: 'Aug', converted: 60 },
    { month: 'Sep', converted: 70 },
    { month: 'Oct', converted: 85 },
    { month: 'Nov', converted: 55 },
    { month: 'Dec', converted: 95 },
  ];

  const lineData = [
    { month: 'Jan', rate: 45 },
    { month: 'Feb', rate: 62 },
    { month: 'Mar', rate: 78 },
    { month: 'Apr', rate: 54 },
    { month: 'May', rate: 91 },
    { month: 'Jun', rate: 67 },
    { month: 'Jul', rate: 83 },
    { month: 'Aug', rate: 59 },
    { month: 'Sep', rate: 73 },
    { month: 'Oct', rate: 88 },
    { month: 'Nov', rate: 52 },
    { month: 'Dec', rate: 97 },
  ];

  const pieData = [
    { name: 'Demo', value: 700, color: '#5E8CE5' },
    { name: 'Converted', value: 77, color: '#DDB442' },
    { name: 'Busy', value: 154, color: '#EF49A2' },
    { name: 'DNP', value: 56, color: '#AB5BF7' },
  ];

  const borderColor = darkMode ? '#688CE2' : 'none';

  return (
    <div style={{ background: darkMode ? '#040813' : '#fff', color: darkMode ? '#fff' : '#000', minHeight: '100vh' }}>
      {/* Stat Boxes */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(4, ${boxWidth}px)`,
          gap: `${gap}px`,
          marginTop: '10px',
          width: '100%',
          boxSizing: 'border-box',
          justifyContent: 'space-between',
        }}
      >
        <StatBox title="Demo" count="700" imgSrc={demoImg} width={boxWidth} height={boxHeight} darkMode={darkMode} />
        <StatBox title="Converted" count="77" imgSrc={convertedImg} width={boxWidth} height={boxHeight} darkMode={darkMode} />
        <StatBox title="Busy" count="154" imgSrc={busyImg} width={boxWidth} height={boxHeight} darkMode={darkMode} />
        <StatBox title="DNP" count="56" imgSrc={dnpImg} width={boxWidth} height={boxHeight} darkMode={darkMode} />
      </div>

      {/* BarChart and PieChart */}
      <div style={{ display: 'flex', marginTop: '32px', gap: '32px' }}>
        {/* BarChart */}
        <div
          style={{
            background: darkMode ? '#111828' : '#fff',
            borderRadius: '16px',
            boxShadow: '6px 6px 10px rgba(27, 89, 248, 0.1)',
            padding: '16px',
            width: '50%',
            border: darkMode ? `2px solid ${borderColor}` : 'none',
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fill: darkMode ? '#fff' : '#000' }} />
              <YAxis tick={{ fill: darkMode ? '#fff' : '#000' }} />
              <Tooltip wrapperStyle={{ backgroundColor: darkMode ? '#111828' : '#fff', borderRadius: 8 }} />
              <Bar dataKey="converted" fill="#5BB6F9" barSize={13} radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PieChart */}
        <div
          style={{
            background: darkMode ? '#111828' : '#fff',
            borderRadius: '16px',
            boxShadow: '6px 6px 10px rgba(27, 89, 248, 0.1)',
            padding: '16px',
            width: '50%',
            border: darkMode ? `2px solid ${borderColor}` : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={130}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip wrapperStyle={{ backgroundColor: darkMode ? '#111828' : '#fff', borderRadius: 8 }} />
              <Legend
                payload={pieData.map(item => ({
                  value: `${item.name} (${item.value})`,
                  type: 'square',
                  color: item.color
                }))}
                layout="vertical"
                align="right"
                verticalAlign="middle"
                wrapperStyle={{ color: darkMode ? '#fff' : '#000' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LineChart */}
      <div
        style={{
          marginTop: '32px',
          background: darkMode ? '#111828' : '#fff',
          borderRadius: '16px',
          boxShadow: '6px 6px 10px rgba(27, 89, 248, 0.1)',
          padding: '24px',
          width: '100%',
          border: darkMode ? `2px solid ${borderColor}` : 'none',
        }}
      >
        <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Conversion Rate</div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fill: darkMode ? '#fff' : '#000' }} />
            <YAxis tick={{ fill: darkMode ? '#fff' : '#000' }} />
            <Tooltip wrapperStyle={{ backgroundColor: darkMode ? '#111828' : '#fff', borderRadius: 8 }} />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 5, stroke: '#10B981', strokeWidth: 2, fill: darkMode ? '#111828' : '#fff' }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboard;
