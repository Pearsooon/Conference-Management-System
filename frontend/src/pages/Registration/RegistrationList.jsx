import React from 'react';
import { Users, Filter, Download, RefreshCw, Check, X, Eye } from 'lucide-react';
import Button from '../../ui/Button'; 

const RegistrationList = ({ colors, data }) => {
    // Assuming registration data is passed via props
    const registrations = data.registrations || [
        { id: 'R001', name: 'John Smith', email: 'john@example.com', ticket: 'Full Access', payment: 'paid', status: 'pending', amount: 350 },
        { id: 'R002', name: 'Sarah Johnson', email: 'sarah@example.com', ticket: 'Student', payment: 'paid', status: 'approved', amount: 150 },
        { id: 'R003', name: 'Mike Chen', email: 'mike@example.com', ticket: 'Full Access', payment: 'unpaid', status: 'pending', amount: 350 }
    ];

    const quickStats = data.registrationStats || [
        { label: 'Total Registrations', value: '328', color: colors.primary },
        { label: 'Pending Approval', value: '12', color: colors.warning },
        { label: 'Approved', value: '305', color: colors.success },
        { label: 'Payment Issues', value: '11', color: colors.danger }
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 600 }}>Registration List 👥</h2>
                    <p style={{ color: colors.textLight }}>Review and approve participant registrations.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="secondary" icon={Filter} colors={colors}>Filter</Button>
                    <Button variant="secondary" icon={Download} colors={colors}>Export</Button>
                    <Button variant="primary" icon={RefreshCw} colors={colors}>Refresh</Button>
                </div>
            </div>

            {/* Quick Stats */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                {quickStats.map(stat => (
                    <div key={stat.label} style={{
                        flex: 1,
                        background: colors.cardBg,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '12px',
                        padding: '20px'
                    }}>
                        <div style={{ fontSize: '13px', color: colors.textLight, marginBottom: '8px' }}>{stat.label}</div>
                        <div style={{ fontSize: '32px', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                    </div>
                ))}
            </div>

            <div style={{
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                overflow: 'hidden'
            }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: colors.bg }}>
                            {['ID', 'Name', 'Email', 'Ticket Type', 'Payment', 'Status', 'Amount', 'Actions'].map(header => (
                                <th key={header} style={{
                                    padding: '16px',
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: colors.textLight
                                }}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {registrations.map((reg, idx) => (
                            <tr key={reg.id} style={{
                                borderBottom: idx < registrations.length - 1 ? `1px solid ${colors.border}` : 'none'
                            }}>
                                <td style={{ padding: '16px', fontWeight: 600, color: colors.primary }}>{reg.id}</td>
                                <td style={{ padding: '16px', fontWeight: 500 }}>{reg.name}</td>
                                <td style={{ padding: '16px', color: colors.textLight }}>{reg.email}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: `${colors.primary}15`,
                                        color: colors.primary,
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: 500
                                    }}>{reg.ticket}</span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: reg.payment === 'paid' ? `${colors.success}15` : `${colors.danger}15`,
                                        color: reg.payment === 'paid' ? colors.success : colors.danger,
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: 600
                                    }}>{reg.payment.toUpperCase()}</span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 10px',
                                        background: reg.status === 'approved' ? `${colors.success}15` : `${colors.warning}15`,
                                        color: reg.status === 'approved' ? colors.success : colors.warning,
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: 600
                                    }}>{reg.status.toUpperCase()}</span>
                                </td>
                                <td style={{ padding: '16px', fontWeight: 600 }}>${reg.amount.toLocaleString()}</td>
                                <td style={{ padding: '16px' }}>
                                    {reg.status === 'pending' && (
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Button variant="success" size="sm" icon={Check} colors={colors}>Approve</Button>
                                            <Button variant="danger" size="sm" icon={X} colors={colors}>Reject</Button>
                                        </div>
                                    )}
                                    {reg.status === 'approved' && (
                                        <Button variant="secondary" size="sm" icon={Eye} colors={colors}>View</Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegistrationList;