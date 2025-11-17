import React, { useState } from "react";
import Sidebar from "./layout/Sidebar";
import PapersListView from "./pages/Papers/PapersListView";
import SessionBuilderView from "./pages/Sessions/SessionBuilderView";
import {
  FileText,
  Calendar,
  CheckCircle,
  Upload,
  AlertCircle,
  Edit,
  Clock
} from "lucide-react";


const App = () => {
  // 🔥 BẮT BUỘC PHẢI CÓ — nếu không sẽ lỗi "sidebarOpen is not defined"
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState("papers-list");

  const colors = {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    secondary: '#64748b',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    bg: '#f8fafc',
    cardBg: '#ffffff',
    border: '#e2e8f0',
    text: '#1e293b',
    textLight: '#64748b'
  };

  const navItems = [
    { id: "papers-list", icon: FileText, label: "Accepted Papers" },
    { id: "session-builder", icon: Calendar, label: "AI Session Builder" }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        sidebarOpen={sidebarOpen}
        currentView={currentView}
        setCurrentView={setCurrentView}
        colors={colors}
        navItems={navItems}
      />

      <main style={{ flex: 1, padding: "24px" }}>
        {currentView === "papers-list" && <PapersListView colors={colors} />}
        {currentView === "session-builder" && <SessionBuilderView colors={colors} />}
        {/* các view khác */}
      </main>
    </div>
  );
};

export default App;
