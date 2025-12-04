import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // Import Navigate

import AuthRouter from "./auth/AuthRouter";
import SecretariatLayout from "./layout/SecretariatLayout";

const App = () => {
  return (
    <Routes>
      {/* Auth system (Landing page cho /auth/*) */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Main App System (Landing page cho /app/*) */}
      <Route path="/app/*" element={<SecretariatLayout />} />

      {/* Redirect Root URL (/) to the Dashboard for testing */}
      <Route path="/" element={<Navigate to="/app/oc/dashboard" replace />} />

      {/* fallback (Sẽ chuyển hướng các URL không khớp về trang Auth) */}
      <Route path="*" element={<AuthRouter />} />
    </Routes>
  );
};

export default App;