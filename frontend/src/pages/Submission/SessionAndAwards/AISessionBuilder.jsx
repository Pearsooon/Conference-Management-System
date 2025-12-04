import React from 'react';
import { Zap, CheckCircle } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, onClick, size = 'md', colors }) => {
    // Re-use Button logic for modularity
    const styles = {
        primary: { background: colors.primary, color: 'white' },
        success: { background: colors.success, color: 'white' },
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

const AISessionBuilder = ({ colors, data }) => {
    // Assuming data.aiSessions is passed via props
    const aiSessions = data.aiSessions || [
        { id: 'AI-S1', title: 'Deep Learning & Neural Networks', papers: 5, confidence: 92 },
        { id: 'AI-S2', title: 'Natural Language Processing', papers: 4, confidence: 88 },
    ];

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>AI Session Builder 🧠</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>AI analyzes accepted papers (keywords, tracks) and proposes optimal session structure and assignment.</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>AI Configuration</h3>
                    <p style={{ color: colors.textLight }}>*Placeholder for input configuration (e.g., number of sessions, max duration per session).</p>
                    <div style={{ marginTop: '20px' }}>
                        <Button icon={Zap} variant="primary" colors={colors}>Run AI Optimization</Button>
                    </div>
                </div>

                <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>AI Proposal Results</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
                        <thead>
                            <tr style={{ background: colors.bg }}>
                                {['ID', 'Title', 'Papers', 'Confidence'].map(header => (
                                    <th key={header} style={{ padding: '10px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: colors.textLight }}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {aiSessions.map((session, idx) => (
                                <tr key={session.id} style={{ borderBottom: idx < aiSessions.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
                                    <td style={{ padding: '10px', fontWeight: '600', color: colors.primary }}>{session.id}</td>
                                    <td style={{ padding: '10px', fontWeight: '500' }}>{session.title}</td>
                                    <td style={{ padding: '10px' }}>{session.papers}</td>
                                    <td style={{ padding: '10px', color: session.confidence > 90 ? colors.success : colors.warning }}>{session.confidence}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button icon={CheckCircle} variant="success" colors={colors}>Accept All Proposals</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AISessionBuilder;