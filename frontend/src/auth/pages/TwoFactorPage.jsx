import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Shield, ArrowRight } from "lucide-react";
import { colors } from "../colors";

const TwoFactorPage = ({ onNavigate }) => {
  const [toast, setToast] = useState(null);
  const [code, setCode] = useState("");

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const submit = (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      showToast("Please enter the 6-digit code");
      return;
    }
    showToast("2FA Verified!", "success");
    setTimeout(() => onNavigate("dashboard"), 1500);
  };

  return (
    <>
      <AuthLayout>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Shield size={48} color={colors.primary} />
        </div>

        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
          Two-Factor Authentication
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "24px" }}>
          Enter the verification code from your authenticator app
        </p>

        <form onSubmit={submit}>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            maxLength={6}
            placeholder="••••••"
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "20px",
              letterSpacing: "10px",
              textAlign: "center",
              borderRadius: "8px",
              border: `1px solid ${colors.border}`,
              marginBottom: "20px"
            }}
          />

          <Button icon={ArrowRight} fullWidth type="submit">
            Verify
          </Button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              onClick={() => onNavigate("login")}
              style={{
                background: "none",
                border: "none",
                color: colors.primary,
                cursor: "pointer",
                fontWeight: 600
              }}
            >
              Back to login
            </button>
          </div>
        </form>
      </AuthLayout>

      <Toast toast={toast} close={() => setToast(null)} />
    </>
  );
};

export default TwoFactorPage;
