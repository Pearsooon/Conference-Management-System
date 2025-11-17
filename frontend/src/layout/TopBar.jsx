import React from "react";
import { Menu, Search, Bell, User, ChevronDown } from "lucide-react";

const TopBar = ({ colors, sidebarOpen, setSidebarOpen }) => {
  return (
    <div style={{
      height: '64px',
      background: colors.cardBg,
      borderBottom: `1px solid ${colors.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
          background: 'none',
          border: 'none',
          padding: '8px',
          cursor: 'pointer',
          color: colors.text
        }}>
          <Menu size={24} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: colors.primary,
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>CM</div>
          <span style={{ fontSize: '18px', fontWeight: '600', color: colors.text }}>
            Conference Manager 2025
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '10px', color: colors.textLight }} />
          <input
            placeholder="Search papers, sessions..."
            style={{
              padding: '8px 12px 8px 40px',
              border: `1px solid ${colors.border}`,
              borderRadius: '8px',
              width: '280px',
              fontSize: '14px'
            }}
          />
        </div>

        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color={colors.text} />
          <span style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            background: colors.danger,
            color: 'white',
            borderRadius: '12px',
            padding: '2px 6px',
            fontSize: '11px',
            fontWeight: '600'
          }}>5</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '8px',
          border: `1px solid ${colors.border}`
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: colors.secondary,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <User size={18} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Secretariat</span>
          <ChevronDown size={16} color={colors.textLight} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
