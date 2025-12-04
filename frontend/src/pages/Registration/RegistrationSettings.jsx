import React from 'react';
import { Settings, Plus, Edit, X } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon, onClick, size = 'md', colors }) => {
    // Re-use Button logic for modularity
    const styles = {
        primary: { background: colors.primary, color: 'white' },
        danger: { background: colors.danger, color: 'white' },
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

const RegistrationSettings = ({ colors, data }) => {
    const ticketTypes = [
        { name: 'Full Access (Early Bird)', price: 300, limit: 100, status: 'Active', color: colors.success },
        { name: 'Regular Attendee', price: 350, limit: 'No Limit', status: 'Active', color: colors.success },
        { name: 'Student', price: 150, limit: 150, status: 'Active', color: colors.success },
        { name: 'On-Site Registration', price: 400, limit: 'N/A', status: 'Inactive', color: colors.danger },
    ];

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Registration Settings 🎟️</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Configure ticket types, pricing, limits, and opening/closing dates for the registration portal.</p>

            <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Ticket Types & Pricing</h3>
                    <Button icon={Plus} size="sm" colors={colors}>Add New Ticket Type</Button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
                    {ticketTypes.map((ticket, idx) => (
                        <div key={idx} style={{ padding: '16px', background: colors.bg, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontWeight: '500' }}>{ticket.name}</div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ fontSize: '14px', color: colors.textLight }}>Limit: {ticket.limit}</span>
                                <span style={{ fontWeight: '600', color: colors.primary }}>${ticket.price}</span>
                                <span style={{ color: ticket.color, fontWeight: '600', fontSize: '14px' }}>{ticket.status}</span>
                                <Button icon={Edit} size="sm" variant="secondary" colors={colors}>Edit</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '24px', borderTop: `1px solid ${colors.border}`, paddingTop: '24px' }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Portal Status</h3>
                    <p style={{ color: colors.textLight, marginBottom: '15px' }}>Registration portal is currently **OPEN** and will automatically close on 2025-05-01.</p>
                    <Button icon={X} variant="danger" colors={colors}>Force Close Portal</Button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationSettings;