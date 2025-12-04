import React, { useState } from "react";
import { colors } from "../../colors";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  error,
  showToggle,
  onToggle,
  showValue
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ marginBottom: "18px" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: 500,
            color: colors.text
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: "relative" }}>
        {Icon && (
          <Icon
            size={18}
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: colors.textLight
            }}
          />
        )}

        <input
          type={showToggle ? (showValue ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            padding: Icon ? "12px 40px 12px 40px" : "12px 14px",
            border: `1px solid ${
              error ? colors.danger : focused ? colors.primary : colors.border
            }`,
            borderRadius: "8px",
            fontSize: "15px",
            outline: "none",
            transition: "border 0.2s"
          }}
        />

        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer"
            }}
          >
            {showValue ? (
              <EyeOff size={18} color={colors.textLight} />
            ) : (
              <Eye size={18} color={colors.textLight} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p style={{ margin: "6px 0 0", fontSize: "13px", color: colors.danger }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
