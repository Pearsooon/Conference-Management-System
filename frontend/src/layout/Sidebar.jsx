import React from "react";

const Sidebar = ({ sidebarOpen, currentView, setCurrentView, colors, navItems }) => {
  return (
    <div style={{
      width: sidebarOpen ? '260px' : '0',
      background: colors.cardBg,
      borderRight: `1px solid ${colors.border}`,
      height: 'calc(100vh - 64px)',
      transition: 'width 0.3s',
      overflow: 'hidden',
      position: 'sticky',
      top: '64px'
    }}>
      <div style={{ padding: '24px 16px' }}>
        <div style={{
          marginBottom: '20px',
          padding: '12px',
          background: `${colors.primary}10`,
          borderRadius: '8px',
          borderLeft: `3px solid ${colors.primary}`
        }}>
          <div style={{ fontSize: '12px', color: colors.textLight, marginBottom: '4px' }}>ACTIVE MODULE</div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: colors.primary }}>Papers & Sessions</div>
        </div>

        {navItems.map(item => (
          <div
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '4px',
              background: currentView === item.id ? colors.primary : 'transparent',
              color: currentView === item.id ? 'white' : colors.text,
              transition: 'all 0.2s'
            }}
          >
            <item.icon size={20} />
            <span style={{ fontSize: '14px', fontWeight: '500' }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
