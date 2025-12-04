import React from 'react';
import { Award, Eye, Download, Send } from 'lucide-react';
import Button from '../../ui/Button'; 

const AwardsAnnouncement = ({ colors, data }) => {
    // Assuming data.awardCandidates is passed via props (simulating BestPaperEval results)
    const awardCandidates = data.awardCandidates || [
        { id: 'P001', title: 'Medical Imaging with Deep Learning', score: 92.3, status: 'Proposed', type: 'Best Paper' },
        { id: 'P005', title: 'Quantum Machine Learning', score: 88.3, status: 'Proposed', type: 'Best Student Paper' },
        { id: 'C001', title: 'Dr. Evelyn Reed', score: null, status: 'Finalized', type: 'Lifetime Achievement' }
    ];
    
    const finalizedCount = awardCandidates.filter(a => a.status === 'Finalized').length;

    return (
        <div>
            <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', fontWeight: 600 }}>Awards & Results Announcement 🏆</h2>
            <p style={{ color: colors.textLight, marginBottom: '24px' }}>Review, finalize, and announce Best Paper and other awards.</p>

            <div style={{
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                padding: '24px',
                overflow: 'hidden'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Pending Award Finalization</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button icon={Award} variant="success" colors={colors}>
                            {finalizedCount > 0 ? `Announce ${finalizedCount} Award(s)` : 'Finalize & Ready to Announce'}
                        </Button>
                    </div>
                </div>
                
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: '16px' }}>
                    <thead>
                        <tr style={{ background: colors.bg }}>
                            {["ID", "Title/Name", "Award Type", "Score/Review", "Status", "Actions"].map(h => (
                                <th key={h} style={{ padding: "12px", color: colors.textLight, textAlign: "left", fontSize: "13px" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {awardCandidates.map((award, idx) => (
                            <tr key={award.id} style={{ borderBottom: idx < awardCandidates.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                                <td style={{ padding: "12px", fontWeight: 600, color: colors.primary }}>{award.id}</td>
                                <td style={{ padding: "12px", fontWeight: 500 }}>{award.title}</td>
                                <td style={{ padding: "12px" }}>{award.type}</td>
                                <td style={{ padding: "12px", color: award.score ? colors.success : colors.textLight, fontWeight: 600 }}>
                                    {award.score ? award.score.toFixed(1) : 'N/A'}
                                </td>
                                <td style={{ padding: "12px" }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                        background: award.status === 'Finalized' ? `${colors.success}15` : `${colors.warning}15`,
                                        color: award.status === 'Finalized' ? colors.success : colors.warning
                                    }}>{award.status}</span>
                                </td>
                                <td style={{ padding: "12px" }}>
                                    <Button icon={Eye} size="sm" variant="secondary" colors={colors}>Review</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ marginTop: '20px', borderTop: `1px solid ${colors.border}`, paddingTop: '16px' }}>
                     <Button icon={Send} variant="secondary" size="sm" colors={colors}>Send Internal Notification (HPC)</Button>
                </div>
            </div>
        </div>
    );
};

export default AwardsAnnouncement;