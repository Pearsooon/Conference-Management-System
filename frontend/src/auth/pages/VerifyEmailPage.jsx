import React, { useState, useEffect } from "react";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Mail, ArrowRight, RefreshCw } from "lucide-react";
import { colors } from "../../colors";

const VerifyEmailPage = ({ onNavigate }) => {
  const [toast, setToast] = useState(null);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  const handleChange = (val, index) => {
    if (!/^[0-9]?$/.test(val)) return;

    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    // Auto move to next box
    if (val && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const submit = (e) => {
    e.preventDefault();

    if (code.join("").length !== 6) {
      showToast("Please enter the 6-digit code");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Email verified!", "success");
      setTimeout(() => onNavigate("login"), 1500);
    }, 1500);
  };

  return (
    <>
      <AuthLayout>
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
          Verify your email
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "24px" }}>
          Enter the 6-digit code sent to your email
        </p>

        <form onSubmit={submit}>
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "24px"
            }}
          >
            {code.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                maxLength={1}
                style={{
                  width: "48px",
                  height: "56px",
                  fontSize: "22px",
                  textAlign: "center",
                  borderRadius: "8px",
                  border: `1px solid ${colors.border}`
                }}
              />
            ))}
          </div>

          <Button
            icon={ArrowRight}
            type="submit"
            loading={loading}
            fullWidth
          >
            Verify Email
          </Button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            {resendTimer > 0 ? (
              <p style={{ opacity: 0.7 }}>
                Resend code in {resendTimer}s
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setResendTimer(30)}
                style={{
                  background: "none",
                  border: "none",
                  color: colors.primary,
                  cursor: "pointer",
                  fontWeight: 600
                }}
              >
                <RefreshCw size={16} /> Resend Code
              </button>
            )}
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: colors.primary,
                cursor: "pointer"
              }}
              onClick={() => onNavigate("login")}
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

export default VerifyEmailPage;
