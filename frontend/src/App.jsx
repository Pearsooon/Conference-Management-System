import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Sidebar from "./layout/Sidebar";
import TopBar from "./layout/TopBar";

// Views  
import PapersListView from "./pages/Papers/PapersListView";
import SessionBuilderView from "./pages/Sessions/SessionBuilderView";
import ReviewDecisionsView from "./pages/ReviewDecisions/ReviewDecisionsView";
import FinalSubmissionView from "./pages/FinalSubmission/FinalSubmissionView";
import BestPaperEvalView from "./pages/BestPaper/BestPaperEvalView";
import PrePublishCheckView from "./pages/PrePublish/PrePublishCheckView";
import AiProofreadView from "./pages/AiProofreading/AiProofreadView";

// Icons
import { FileText, Calendar, CheckCircle, Upload, AlertCircle, Edit, Clock } from "lucide-react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const colors = {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    secondary: "#64748b",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
    bg: "#f8fafc",
    cardBg: "#ffffff",
    border: "#e2e8f0",
    text: "#1e293b",
    textLight: "#64748b",
  };

  const navItems = [
    { id: "papers", label: "Accepted Papers", icon: FileText, path: "/" },
    { id: "sessions", label: "AI Session Builder", icon: Calendar, path: "/sessions" },
    { id: "reviews", label: "Review Decisions", icon: CheckCircle, path: "/reviews" },
    { id: "final", label: "Final Submissions", icon: Upload, path: "/final" },
    { id: "best", label: "Best Paper Eval", icon: AlertCircle, path: "/best-paper" },
    { id: "proof", label: "AI Proofreading", icon: Edit, path: "/ai-proofread" },
    { id: "prepublish", label: "Pre-Publish Check", icon: Clock, path: "/prepublish" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      
      {/* TOP BAR */}
      <TopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} colors={colors} />

      <div style={{ display: "flex", height: "100%" }}>
        
        {/* SIDEBAR */}
        <Sidebar navItems={navItems} colors={colors} sidebarOpen={sidebarOpen} />

        {/* MAIN CONTENT */}
        <div style={{ flex: 1, padding: "24px", overflowY: "auto" }}>
          <Routes>
            <Route path="/" element={<PapersListView colors={colors} />} />
            <Route path="/sessions" element={<SessionBuilderView colors={colors} />} />
            <Route path="/reviews" element={<ReviewDecisionsView colors={colors} />} />
            <Route path="/final" element={<FinalSubmissionView colors={colors} />} />
            <Route path="/best-paper" element={<BestPaperEvalView colors={colors} />} />
            <Route path="/ai-proofread" element={<AiProofreadView colors={colors} />} />
            <Route path="/prepublish" element={<PrePublishCheckView colors={colors} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
