import React from 'react';
import { Settings, Save, Send } from 'lucide-react';

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

const ConferenceSetup = ({ colors, data }) => {
    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Conference Setup & Timeline 🏢</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Configure essential conference details, tracks, keynotes, and schedule constraints.</p>
            <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Basic Information</h3>
                <p style={{ color: colors.textLight, marginBottom: '20px' }}>*Placeholder for general information forms (Name, Venue, Dates, Duration).</p>
                
                {/* Example Form Input */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <input type="text" placeholder="Conference Name (e.g., CM 2025)" style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px' }} />
                    <input type="text" placeholder="Venue Location" style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px' }} />
                    <input type="date" placeholder="Start Date" style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px' }} />
                    <input type="number" placeholder="Duration (Days)" style={{ padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <Button icon={Save} colors={colors}>Save Draft</Button>
                </div>

                <div style={{ marginTop: '24px', borderTop: `1px solid ${colors.border}`, paddingTop: '24px' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Tracks & Timeline Editor</h3>
                    <p style={{ color: colors.textLight }}>*Placeholder for visual timeline editor and conflict detection (e.g., Cvent Agenda Builder). Final schedule pending AI Session Builder results.</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                        <Button icon={Send} variant="primary" colors={colors}>Submit for Approval</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConferenceSetup;