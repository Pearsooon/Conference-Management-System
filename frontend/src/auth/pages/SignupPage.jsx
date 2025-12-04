import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Toast from "../components/Toast";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { colors } from "../../colors";

// NEW imports
import { usePasswordStrength } from "../hooks/usePasswordStrength";
import PasswordStrengthBar from "../components/PasswordStrengthBar";

const SignupPage = ({ onNavigate }) => {
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "author",
    password: "",
    confirmPassword: "",
    showPass: false,
    showConfirm: false
  });

  // Use the custom hook
  const { score, label } = usePasswordStrength(form.password);

  const showToast = (msg, type = "error") => {
    setToast({ message: msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const submitSignup = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      showToast("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    if (score < 3) {
      showToast("Password is too weak");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Account created!", "success");
      onNavigate("verify-email");
    }, 1500);
  };

  return (
    <>
      <AuthLayout>
        <div style={{ marginBottom: "24px" }}>
          <h2 style={{ margin: 0, fontSize: "24px", fontWeight: 600 }}>
            Create your account
          </h2>
          <p style={{ opacity: 0.7, fontSize: "14px" }}>
            Join the conference management platform
          </p>
        </div>

        <form onSubmit={submitSignup}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <Input
              label="First Name"
              placeholder="John"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />

            <Input
              label="Last Name"
              placeholder="Doe"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
          </div>

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            icon={Mail}
          />

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              User Role
            </label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: `1px solid ${colors.border}`
              }}
            >
              <option value="author">Author</option>
              <option value="reviewer">Reviewer</option>
              <option value="track-chair">Track Chair</option>
              <option value="secretariat">Secretariat</option>
              <option value="admin" disabled>
                Admin (Restricted)
              </option>
            </select>
          </div>

          <Input
            label="Password"
            placeholder="Create a strong password"
            icon={Lock}
            type="password"
            showToggle
            showValue={form.showPass}
            onToggle={() => setForm({ ...form, showPass: !form.showPass })}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          {/* PASSWORD STRENGTH BAR */}
          {form.password.length > 0 && (
            <PasswordStrengthBar score={score} label={label} />
          )}

          <Input
            label="Confirm Password"
            placeholder="Re-enter your password"
            type="password"
            icon={Lock}
            showToggle
            showValue={form.showConfirm}
            onToggle={() =>
              setForm({ ...form, showConfirm: !form.showConfirm })
            }
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          <Button type="submit" icon={ArrowRight} loading={loading} fullWidth>
            Create Account
          </Button>
        </form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          Already have an account?{" "}
          <button
            onClick={() => onNavigate("login")}
            style={{
              background: "none",
              border: "none",
              color: "#2563eb",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Sign in
          </button>
        </div>
      </AuthLayout>

      <Toast toast={toast} close={() => setToast(null)} />
    </>
  );
};

export default SignupPage;
