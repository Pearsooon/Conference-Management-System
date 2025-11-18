import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Lock, ArrowRight } from "lucide-react";
import { colors } from "../colors";

const ResetPasswordPage = ({ onNavigate }) => {
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
    showPass: false,
    showConfirm: false
  });

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password.length < 8) {
      showToast("Password must be at least 8 characters");
      return;
    }
    if (form.password !== form.confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Password updated successfully!", "success");

      setTimeout(() => onNavigate("login"), 1500);
    }, 1500);
  };

  return (
    <>
      <AuthLayout>
        <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
          Set a new password
        </h2>
        <p style={{ opacity: 0.7, marginBottom: "24px" }}>
          Your new password must be secure
        </p>

        <form onSubmit={handleSubmit}>
          <Input
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            icon={Lock}
            showToggle
            showValue={form.showPass}
            onToggle={() =>
              setForm({ ...form, showPass: !form.showPass })
            }
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Re-enter password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
            icon={Lock}
            showToggle
            showValue={form.showConfirm}
            onToggle={() =>
              setForm({ ...form, showConfirm: !form.showConfirm })
            }
          />

          <Button icon={ArrowRight} type="submit" loading={loading} fullWidth>
            Update Password
          </Button>
        </form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
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
      </AuthLayout>

      <Toast toast={toast} close={() => setToast(null)} />
    </>
  );
};

export default ResetPasswordPage;
