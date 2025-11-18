import React from "react";
import { Routes, Route } from "react-router-dom";

import AuthRouter from "./auth/AuthRouter";
import SecretariatLayout from "./layout/SecretariatLayout";

const App = () => {
  return (
    <Routes>
      {/* Auth system */}
      <Route path="/auth/*" element={<AuthRouter />} />

      {/* Secretariat system */}
      <Route path="/app/*" element={<SecretariatLayout />} />

      {/* fallback */}
      <Route path="*" element={<AuthRouter />} />
    </Routes>
  );
};

export default App;
