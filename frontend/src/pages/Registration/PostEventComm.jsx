import React from 'react';
import { Send, FileText, ExternalLink } from 'lucide-react';

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

const PostEventComm = ({ colors, data }) => {
    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Post-Event Communication 📢</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Send thank you emails, proceedings links, and feedback forms to participants.</p>
            <div style={{ padding: '24px', background: colors.cardBg, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Create Thank You Email</h3>
                
                {/* Email Subject and Attachments */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                    <input type="text" placeholder="Subject: Thank You for Attending..." style={{ padding: '10px', flex: 1, border: `1px solid ${colors.border}`, borderRadius: '6px' }} />
                    <Button icon={FileText} variant="secondary" colors={colors}>Attach Proceedings Link</Button>
                    <Button icon={ExternalLink} variant="secondary" colors={colors}>Add Feedback Form Link</Button>
                </div>
                
                {/* Email Body */}
                <textarea placeholder="Email Body Content..." rows={8} style={{ width: '100%', padding: '10px', border: `1px solid ${colors.border}`, borderRadius: '6px', marginBottom: '20px' }}></textarea>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button icon={Send} colors={colors}>Schedule Send (Post-Event)</Button>
                </div>
            </div>
        </div>
    );
};

export default PostEventComm;