import React from "react";
import { Loader } from "lucide-react";
import { colors } from "../colors";

const Button = ({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
  type = "button",
  disabled,
  fullWidth,
  loading
}) => {
  const variants = {
    primary: { background: colors.primary, color: "white", border: "none" },
    secondary: { background: colors.cardBg, color: colors.text, border: `1px solid ${colors.border}` },
    ghost: { background: "transparent", color: colors.primary, border: "none" },
    google: { background: colors.cardBg, color: colors.text, border: `1px solid ${colors.border}` }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        ...variants[variant],
        width: fullWidth ? "100%" : "auto",
        padding: "12px 24px",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: "600",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        opacity: disabled ? 0.6 : 1
      }}
    >
      {loading ? <Loader size={18} style={{ animation: "spin 1s linear infinite" }} /> : Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
