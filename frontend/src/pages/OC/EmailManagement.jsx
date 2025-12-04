import React from 'react';
import { Mail, Send, Plus, CheckCircle, X, Clock } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, onClick, size = 'md', colors }) => {
    // Re-use Button logic for modularity
    const styles = {
        primary: { background: colors.primary, color: 'white' },
        secondary: { background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }
    };

    return (
        <button onClick={onClick} style={{
            ...styles[variant],
            padding: size === 'sm' ? '6px 12px' : '10px 16px',
            borderRadius: '8px',
            border: 'none',
            fontSize: size === 'sm' ? '13px' : '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
            {Icon && <Icon size={size === 'sm' ? 16 : 18} />}
            {children}
        </button>
    );
};

const StatCard = ({ icon: Icon, label, value, color, colors }) => (
    <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: '12px',
        padding: '24px',
        flex: 1
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
            <div style={{
                width: '48px',
                height: '48px',
                background: `${color}15`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icon size={24} color={color} />
            </div>
        </div>
        <div style={{ fontSize: '13px', color: colors.textLight, marginBottom: '4px' }}>{label}</div>
        <div style={{ fontSize: '28px', fontWeight: '700', color: color }}>{value}</div>
    </div>
);

const EmailManagement = ({ colors, data }) => {
    // Mock data for this component, assuming data is passed via props
    const inviteStats = {
        sent: 45,
        accepted: 38,
        declined: 3,
        pending: 4
    };

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Email Management & Invitations 📧</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Create templates, send official invitations (keynote/chair), and track RSVP status.</p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <Button icon={Plus} colors={colors}>Create New Template</Button>
                <Button variant="secondary" icon={Mail} colors={colors}>View Send Logs</Button>
            </div>
            <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Invitation Status Summary</h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <StatCard icon={Send} label="Invites Sent" value={inviteStats.sent} color={colors.primary} colors={colors} />
                    <StatCard icon={CheckCircle} label="RSVP Accepted" value={inviteStats.accepted} color={colors.success} colors={colors} />
                    <StatCard icon={X} label="RSVP Declined" value={inviteStats.declined} color={colors.danger} colors={colors} />
                    <StatCard icon={Clock} label="Pending Response" value={inviteStats.pending} color={colors.warning} colors={colors} />
                </div>
                <p style={{ color: colors.textLight, marginTop: '20px' }}>*Placeholder for list of Keynote/Chair invitations and their current status.</p>
            </div>
        </div>
    );
};

export default EmailManagement;