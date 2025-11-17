import React from "react";

const Button = ({ children, variant = 'primary', icon: Icon, onClick, size = 'md', colors }) => {
  const styles = {
    primary: { background: colors.primary, color: 'white', border: 'none' },
    secondary: { background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` },
    success: { background: colors.success, color: 'white', border: 'none' },
    danger: { background: colors.danger, color: 'white', border: 'none' },
    ghost: { background: 'transparent', color: colors.text, border: `1px solid ${colors.border}` }
  };

  const sizes = {
    sm: { padding: '6px 12px', fontSize: '13px' },
    md: { padding: '10px 16px', fontSize: '14px' },
    lg: { padding: '12px 20px', fontSize: '15px' }
  };

  return (
    <button onClick={onClick} style={{
      ...styles[variant],
      ...sizes[size],
      borderRadius: '8px',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.2s',
      whiteSpace: 'nowrap'
    }}>
      {Icon && <Icon size={size === 'sm' ? 16 : 18} />}
      {children}
    </button>
  );
};

export default Button;
