import React from "react";
import { colors } from "../../colors";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.bg} 100%)`,
        padding: "24px",
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          background: colors.cardBg,
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          padding: "42px 36px",
          width: "100%",
          maxWidth: "420px",
          animation: "fadeIn 0.3s ease-out"
        }}
      >
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "14px",
              background: colors.primary,
              margin: "0 auto 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            CM
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: colors.text
            }}
          >
            Conference Manager
          </h1>

          <p
            style={{
              marginTop: 4,
              fontSize: "14px",
              color: colors.textLight
            }}
          >
            Professional event management platform
          </p>
        </div>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
