import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Mail, CheckCircle } from "lucide-react";
import { colors } from "../../colors";

const ForgotPasswordPage = ({ onNavigate }) => {
  const [form, setForm] = useState({ email: "" });
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.email) return showToast("Please enter your email");

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCountdown(60);
      showToast("Reset link sent!", "success");
    }, 1500);
  };

  return (
    <>
      <AuthLayout>
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
            Reset your password
          </h2>
          <p style={{ opacity: 0.7 }}>Enter your email to receive a reset link</p>
        </div>

        <form onSubmit={submit}>
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            icon={Mail}
            value={form.email}
            onChange={(e) => setForm({ email: e.target.value })}
          />

          <Button type="submit" fullWidth loading={loading} icon={Mail}>
            Send Reset Link
          </Button>

          {countdown > 0 && (
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                gap: "8px",
                alignItems: "center",
                padding: "12px",
                background: `${colors.success}15`,
                borderRadius: "8px"
              }}
            >
              <CheckCircle size={16} color={colors.success} />
              Reset link sent — you can resend in {countdown}s
            </div>
          )}

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#2563eb",
                cursor: "pointer",
                fontWeight: 600
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

export default ForgotPasswordPage;
