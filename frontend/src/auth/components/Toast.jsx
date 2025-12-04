import React from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";
import { colors } from "../../colors";

const Toast = ({ toast, close }) => {
  if (!toast) return null;

  const bg = {
    success: colors.success,
    error: colors.danger,
    warning: colors.warning
  };

  return (
    <div style={{
      position: "fixed",
      top: "20px",
      right: "20px",
      background: bg[toast.type],
      color: "white",
      padding: "16px 20px",
      borderRadius: "8px",
      display: "flex",
      gap: "12px"
    }}>
      {toast.type === "success" ? <CheckCircle size={20}/> : <AlertCircle size={20}/>}
      <span>{toast.message}</span>

      <button onClick={close} style={{ background: "none", border: "none", color: "white" }}>
        <X size={20}/>
      </button>
    </div>
  );
};

export default Toast;
