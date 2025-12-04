import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// Import TopBar, Sidebar, colors (đã fix)
// ... import PAGES ...

// --- Dữ liệu MOCK Tạm thời (Chuyển sang context/hooks sau) ---
// ... mockColors và mockData ...

const MODULE_ROUTES = {
    // Sửa ID để khớp với URL và logic trong Sidebar
    oc: {
        title: 'Organizing Committee',
        items: [
            { id: 'oc/dashboard', label: 'Financial Dashboard', icon: 'DollarSign' },
            { id: 'oc/budget-approval', label: 'Budget Approvals', icon: 'AlertTriangle' },
            { id: 'oc/setup', label: 'Conference Setup', icon: 'Settings' },
            { id: 'oc/email-management', label: 'Email Management', icon: 'Mail' },
            { id: 'oc/awards', label: 'Awards & Results', icon: 'Award' }
        ]
    },
    registration: {
        title: 'Registration & CMS',
        items: [
            { id: 'reg/list', label: 'Registration List', icon: 'Users' },
            { id: 'reg/settings', label: 'Registration Settings', icon: 'Sliders' },
            { id: 'reg/cms', label: 'Content Management', icon: 'Globe' },
            { id: 'reg/post-comm', label: 'Post-Event Comm', icon: 'Send' }
        ]
    },
    logistics: {
        title: 'Logistics & On-site',
        items: [
            { id: 'logistics/staff', label: 'Staff Assignment', icon: 'Calendar' },
            { id: 'logistics/checkin', label: 'QR Check-in', icon: 'QrCode' },
            { id: 'logistics/venue', label: 'Venue & Travel', icon: 'MapPin' }
        ]
    },
    submission: {
        title: 'Academic Submission',
        items: [
            { id: 'sub/review-decisions', label: 'Review Decisions', icon: 'Eye' },
            { id: 'sub/papers-list', label: 'Papers List', icon: 'FileText' },
            { id: 'sub/final-submission', label: 'Final Submissions', icon: 'Upload' },
            { id: 'sub/proofread', label: 'AI Proofreading', icon: 'Brain' },
            { id: 'sub/pre-publish', label: 'Pre-Publish Check', icon: 'CheckCircle' },
            { id: 'sub/best-paper', label: 'Best Paper Eval', icon: 'Star' },
            { id: 'sub/ai-session', label: 'AI Session Builder', icon: 'Zap' },
        ]
    }
};

const SecretariatLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    // 1. Xác định Module Key hiện tại dựa trên URL
    // URL format: /app/moduleKey/path
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const moduleKey = pathSegments[1] || 'oc'; // Mặc định là 'oc'

    // 2. Lấy danh sách Nav Items cho module hiện tại
    const currentModuleData = MODULE_ROUTES[moduleKey] || MODULE_ROUTES.oc;

    // 3. Chuẩn bị NavItems để truyền xuống Sidebar
    const navItems = currentModuleData.items.map(item => ({
        ...item,
        path: `/app/${item.id}` // Tạo đường dẫn tuyệt đối
    }));
    
    // Fallback: Nếu không tìm thấy module, dùng mảng rỗng để tránh lỗi .map()
    const finalNavItems = currentModuleData ? navItems : []; 

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: mockColors.bg }}>
            <TopBar 
                colors={mockColors} 
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
            
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <Sidebar 
                    colors={mockColors} 
                    sidebarOpen={sidebarOpen}
                    navItems={finalNavItems} // TRUYỀN DANH SÁCH ITEMS ĐÃ ĐƯỢC XỬ LÝ
                    moduleTitle={currentModuleData.title} // Tên Module để hiển thị
                />
                
                <main style={{ flex: 1, padding: '24px 32px', overflowY: 'auto' }}>
                    <Routes>
                        {/* --- OC Routes --- */}
                        <Route path="oc/dashboard" element={<FinancialDashboard colors={mockColors} data={mockData} />} />
                        {/* ... Các Routes khác ... */}
                        
                        {/* Fallback cho /app/ (Redirect đến trang mặc định) */}
                        <Route path="/" element={<Navigate to="oc/dashboard" replace />} />
                    </Routes>
                </main>
            </div>
        </div>
    );
};

export default SecretariatLayout;