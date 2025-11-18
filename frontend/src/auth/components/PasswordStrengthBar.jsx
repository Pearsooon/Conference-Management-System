// src/auth/components/PasswordStrengthBar.jsx

import React from "react";
import { colors } from "../colors";

const strengthColors = [
  "#ef4444", // Very weak
  "#f59e0b", // Weak
  "#fbbf24", // Fair
  "#10b981", // Good
  "#059669"  // Strong
];

const PasswordStrengthBar = ({ score, label }) => {
  const width = (score / 5) * 100;

  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          height: "6px",
          background: colors.border,
          borderRadius: "4px",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: strengthColors[score - 1] || colors.border,
            transition: "width 0.3s ease"
          }}
        ></div>
      </div>

      <div
        style={{
          marginTop: "6px",
          fontSize: "13px",
          fontWeight: 500,
          color: strengthColors[score - 1] || colors.textLight
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default PasswordStrengthBar;
