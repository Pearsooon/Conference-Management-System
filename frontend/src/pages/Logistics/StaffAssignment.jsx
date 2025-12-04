import React from 'react';
import { Calendar, Plus, Edit, AlertTriangle, Check } from 'lucide-react';

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

const StaffAssignment = ({ colors, data }) => {
    // Assuming data.staffAssignments is passed via props
    const staffAssignments = data.staffAssignments || [
        { id: 'S1', session: 'AI & ML Session', time: '09:00-11:00', room: 'Hall A', chair: 'Dr. Smith', tech: 'John Doe', volunteers: 2, conflict: false },
        { id: 'S2', session: 'Blockchain Track', time: '11:30-13:30', room: 'Hall B', chair: 'Dr. Lee', tech: 'Jane Smith', volunteers: 2, conflict: false },
        { id: 'S3', session: 'Poster Session', time: '14:00-16:00', room: 'Lobby', chair: '', tech: '', volunteers: 0, conflict: true }
    ];

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: '600' }}>Staff Assignment & Schedule 👥</h2>
            <p style={{ margin: 0, color: colors.textLight, marginBottom: '24px' }}>Assign staff (Chairs, Tech, Volunteers) to sessions and manage schedules/conflicts.</p>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <Button icon={Calendar} colors={colors}>View Full Schedule</Button>
                <Button icon={Plus} variant="secondary" colors={colors}>Add Staff Member</Button>
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
                            {['Session', 'Time', 'Room', 'Chair', 'Tech', 'Volunteers', 'Conflicts', 'Actions'].map(header => (
                                <th key={header} style={{ padding: '16px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: colors.textLight }}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {staffAssignments.map((assignment, idx) => (
                            <tr key={assignment.id} style={{ borderBottom: idx < staffAssignments.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
                                <td style={{ padding: '16px', fontWeight: '500' }}>{assignment.session}</td>
                                <td style={{ padding: '16px', color: colors.textLight }}>{assignment.time}</td>
                                <td style={{ padding: '16px' }}>{assignment.room}</td>
                                <td style={{ padding: '16px', color: assignment.chair ? colors.text : colors.danger }}>{assignment.chair || 'UNASSIGNED'}</td>
                                <td style={{ padding: '16px', color: assignment.tech ? colors.text : colors.danger }}>{assignment.tech || 'UNASSIGNED'}</td>
                                <td style={{ padding: '16px' }}>{assignment.volunteers}</td>
                                <td style={{ padding: '16px' }}>
                                    {assignment.conflict ? <AlertTriangle size={18} color={colors.danger} /> : <Check size={18} color={colors.success} />}
                                </td>
                                <td style={{ padding: '16px' }}>
                                    <Button size="sm" icon={Edit} variant="secondary" colors={colors}>Manage</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StaffAssignment;