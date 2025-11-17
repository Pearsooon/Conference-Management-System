import React from "react";

const Button = ({ children, variant = "primary", icon: Icon, onClick, size = "md", colors }) => {

  const theme = colors || {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    danger: "#ef4444",
    success: "#10b981",
    bg: "#f8fafc",
    border: "#e2e8f0",
    text: "#1e293b"
  };

  const styles = {
    primary: { background: theme.primary, color: "white", border: "none" },
    secondary: { background: theme.bg, color: theme.text, border: `1px solid ${theme.border}` },
    success: { background: theme.success, color: "white", border: "none" },
    danger: { background: theme.danger, color: "white", border: "none" },
    ghost: { background: "transparent", color: theme.text, border: `1px solid ${theme.border}` }
  };

  const sizes = {
    sm: { padding: "6px 12px", fontSize: "13px" },
    md: { padding: "10px 16px", fontSize: "14px" },
    lg: { padding: "12px 20px", fontSize: "15px" },
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        ...sizes[size],
        borderRadius: "8px",
        fontWeight: "500",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap",
        transition: "all 0.2s"
      }}
    >
      {Icon && <Icon size={size === "sm" ? 16 : 18} />}
      {children}
    </button>
  );
};

export default Button;
