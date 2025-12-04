import React from 'react';
import { QrCode, Camera, Smartphone } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, onClick, size = 'md', colors }) => {
    // Re-use Button logic for modularity
    const styles = {
        primary: { background: colors.primary, color: 'white' }
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

const QrCheckin = ({ colors, data }) => {
    const liveStats = [
        { label: 'Total Checked In', value: '298 / 328', color: colors.success },
        { label: 'Last Check-in', value: 'Jane Doe (09:15 AM)', color: colors.primary },
        { label: 'Unpaid Issues', value: '3', color: colors.danger },
    ];

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>QR Code Check-in 📱</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>On-site tool for quick QR scanning, attendance recording, and badge printing.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Check-in Console</h3>
                    <div style={{
                        height: '200px',
                        background: colors.bg,
                        borderRadius: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        border: `2px dashed ${colors.border}`
                    }}>
                        <Camera size={48} color={colors.textLight} />
                        <p style={{ color: colors.textLight, marginTop: '8px' }}>Simulated Camera View / Scan Area</p>
                    </div>
                    <input type="text" placeholder="Or Search Name/Email Manually..." style={{ width: '100%', padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px', marginBottom: '16px' }} />
                    <Button icon={Smartphone} variant="primary" colors={colors}>Launch Mobile Check-in App</Button>
                </div>

                <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Live Check-in Stats</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {liveStats.map((stat, idx) => (
                            <div key={idx} style={{ padding: '16px', background: colors.bg, borderRadius: '8px', borderLeft: `4px solid ${stat.color}`, display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: colors.textLight }}>{stat.label}</span>
                                <span style={{ fontWeight: '600', color: stat.color }}>{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QrCheckin;