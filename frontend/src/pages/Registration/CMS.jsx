import React from 'react';
import { Plus, Globe, Edit } from 'lucide-react';

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

const CMS = ({ colors, data }) => {
    const publishedContent = [
        { title: 'Call for Papers (CFP)', status: 'Published', date: '2024-10-01', color: colors.success },
        { title: 'Final Agenda', status: 'Scheduled (2025-04-15)', date: '2025-04-01', color: colors.warning },
        { title: 'Venue Information & Map', status: 'Published', date: '2024-12-01', color: colors.success },
        { title: 'Keynote Speakers Bio', status: 'Draft', date: '2025-03-25', color: colors.danger },
    ];

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Content Management System (CMS) 🌐</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Manage and schedule publication of website content (CFP, Agenda, Venue, etc.).</p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <Button icon={Plus} colors={colors}>Create New Post/Page</Button>
                <Button variant="secondary" icon={Globe} colors={colors}>View Live Website</Button>
            </div>

            <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Published Content</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {publishedContent.map((content, idx) => (
                        <div key={idx} style={{ padding: '16px', background: colors.bg, borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontWeight: '500' }}>{content.title}</div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <span style={{ fontSize: '14px', color: colors.textLight }}>Last Edit: {content.date}</span>
                                <span style={{ color: content.color, fontWeight: '600', fontSize: '14px' }}>{content.status}</span>
                                <Button icon={Edit} size="sm" variant="secondary" colors={colors}>Edit</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CMS;