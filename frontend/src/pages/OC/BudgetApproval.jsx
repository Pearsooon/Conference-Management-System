import React from 'react';
import { AlertTriangle, Filter, Download, Check, X, Eye } from 'lucide-react';
import Button from '../../ui/Button'; 

const BudgetApproval = ({ colors, data }) => {
    // Assuming data.budgetRequests is passed via props
    const budgetRequests = data.budgetRequests || [
        { id: 1, category: 'Catering', requested: 5000, reason: 'Additional VIP dinner', status: 'pending', date: '2025-03-15' },
        { id: 2, category: 'Marketing', requested: 3000, reason: 'Social media ads campaign', status: 'pending', date: '2025-03-14' },
        { id: 3, category: 'Technology', requested: 2500, reason: 'Extra AV equipment', status: 'approved', date: '2025-03-12' }
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 600 }}>Budget Approval Requests ⚠️</h2>
                    <p style={{ color: colors.textLight }}>Review and approve budget overrun requests.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="secondary" icon={Filter} colors={colors}>Filter</Button>
                    <Button variant="secondary" icon={Download} colors={colors}>Export</Button>
                </div>
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
                            {['Request ID', 'Category', 'Amount', 'Reason', 'Date', 'Status', 'Actions'].map(header => (
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
                        {budgetRequests.map((request, idx) => (
                            <tr key={request.id} style={{
                                borderBottom: idx < budgetRequests.length - 1 ? `1px solid ${colors.border}` : 'none'
                            }}>
                                <td style={{ padding: '16px', fontWeight: 600, color: colors.primary }}>#{request.id}</td>
                                <td style={{ padding: '16px' }}>{request.category}</td>
                                <td style={{ padding: '16px', fontWeight: 600 }}>${request.requested.toLocaleString()}</td>
                                <td style={{ padding: '16px', maxWidth: '250px', color: colors.textLight }}>{request.reason}</td>
                                <td style={{ padding: '16px', fontSize: '14px' }}>{request.date}</td>
                                <td style={{ padding: '16px' }}>
                                    <span style={{
                                        padding: '4px 12px',
                                        borderRadius: '6px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        background: request.status === 'approved' ? `${colors.success}15` : 
                                                     request.status === 'pending' ? `${colors.warning}15` : `${colors.danger}15`,
                                        color: request.status === 'approved' ? colors.success : 
                                               request.status === 'pending' ? colors.warning : colors.danger
                                    }}>
                                        {request.status.toUpperCase()}
                                    </span>
                                </td>
                                <td style={{ padding: '16px' }}>
                                    {request.status === 'pending' && (
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <Button variant="success" size="sm" icon={Check} colors={colors}>Approve</Button>
                                            <Button variant="danger" size="sm" icon={X} colors={colors}>Reject</Button>
                                        </div>
                                    )}
                                    {request.status === 'approved' && (
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

export default BudgetApproval;