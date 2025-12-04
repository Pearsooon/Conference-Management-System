import React, { useState } from "react";
// Giả định Button, Modal được import từ UI components folder
import Button from "../../../ui/Button"; 
import Modal from "../../../ui/Modal";
import { Star, Filter, Eye, Save, Brain } from "lucide-react";

// Mock data (thêm AI Score)
const mockPapers = [
    { id: "P001", title: "Medical Imaging with Deep Learning", novelty: 4.5, impact: 4.2, clarity: 4.3, ai_depth: 8.9 },
    { id: "P002", title: "Blockchain Transparency Systems", novelty: 4.0, impact: 3.8, clarity: 4.1, ai_depth: 7.5 },
    { id: "P003", title: "Quantum Optimization Models", novelty: 3.8, impact: 4.0, clarity: 3.7, ai_depth: 8.1 }
];

const computeScore = (p) => ((p.novelty + p.impact + p.clarity) / 3).toFixed(2);

const BestPaperEvalView = ({ colors }) => {
    const [papers, setPapers] = useState(mockPapers);
    const [selected, setSelected] = useState(null);
    const [show, setShow] = useState(false);
    const [loadingAI, setLoadingAI] = useState(false);

    // Xử lý chạy AI Analysis
    const runAIAnalysis = () => {
        setLoadingAI(true);
        // Mô phỏng quá trình xử lý AI mất 2 giây
        setTimeout(() => {
            alert("AI Deep Review Analysis Completed. Scores updated.");
            setLoadingAI(false);
            // Cập nhật papers với điểm AI mới (chỉ để minh họa)
            setPapers(papers.map(p => ({
                ...p,
                ai_depth: parseFloat((Math.random() * (9.5 - 7.0) + 7.0).toFixed(1))
            })));
        }, 2000);
    };

    return (
        <div>
            <h2 style={{ fontSize: "28px", margin: 0, fontWeight: 600 }}>Best Paper Evaluation 🌟</h2>
            [cite_start]<p style={{ color: colors.textLight }}>Evaluate papers and select top candidates using AI-assisted metrics[cite: 48].</p>

            {/* Filter and AI Action Row */}
            <div style={{
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                margin: "20px 0",
                padding: "15px",
                background: colors.cardBg,
                borderRadius: "12px",
                border: `1px solid ${colors.border}`
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Filter size={18} color={colors.primary} />
                    <span style={{ fontWeight: 600, color: colors.primary }}>AI Filter: Top 5% Candidates</span>
                </div>
                
                <Button 
                    variant="secondary" 
                    icon={Brain} 
                    onClick={runAIAnalysis}
                    // Thêm style loading nếu cần
                    style={{ 
                        opacity: loadingAI ? 0.6 : 1,
                        cursor: loadingAI ? 'not-allowed' : 'pointer',
                        borderColor: colors.primary
                    }}
                >
                    {loadingAI ? 'Running AI Analysis...' : 'Run AI Deep Review Analysis'}
                </Button>
            </div>

            {/* Paper List Table */}
            <div style={{
                background: colors.cardBg,
                border: `1px solid ${colors.border}`,
                borderRadius: "12px",
                overflow: "hidden"
            }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ background: colors.bg }}>
                            {[
                                "ID", 
                                "Title", 
                                "Novelty", 
                                "Impact", 
                                "Clarity", 
                                "Avg Score", 
                                "Reviewer Depth (AI)", // Cột mới
                                "Actions"
                            ].map(h => (
                                <th key={h} style={{ padding: "16px", color: colors.textLight, textAlign: "left", fontSize: "14px" }}>
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {papers.map((p, idx) => (
                            <tr key={p.id} style={{ borderBottom: idx < papers.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                                <td style={{ padding: "16px", fontWeight: 600, color: colors.primary }}>{p.id}</td>
                                <td style={{ padding: "16px", fontWeight: 500 }}>{p.title}</td>
                                <td style={{ padding: "16px" }}>{p.novelty}</td>
                                <td style={{ padding: "16px" }}>{p.impact}</td>
                                <td style={{ padding: "16px" }}>{p.clarity}</td>
                                <td style={{ padding: "16px", fontWeight: 700, color: colors.success }}>{computeScore(p)}</td>
                                <td style={{ padding: "16px", fontWeight: 600, color: colors.primary }}>{p.ai_depth.toFixed(1)} / 10</td> {/* Hiển thị AI Score */}
                                <td style={{ padding: "16px" }}>
                                    <button
                                        onClick={() => { setSelected(p); setShow(true); }}
                                        style={{
                                            padding: "6px",
                                            background: colors.bg,
                                            border: `1px solid ${colors.border}`,
                                            borderRadius: "6px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <Eye size={16} color={colors.textLight} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div style={{ marginTop: "20px", textAlign: "right" }}>
                <Button variant="primary" icon={Star}>Finalize Best Paper List</Button>
            </div>


            {/* Modal for Details and Manual Adjustment */}
            <Modal show={show} onClose={() => setShow(false)} title={`Evaluation Details: ${selected?.title || ''}`} colors={colors}>
                {selected && (
                    <div style={{ color: colors.text }}>
                        <h4 style={{ margin: '0 0 10px 0', fontWeight: 600 }}>Quantitative Scores (Avg: {computeScore(selected)})</h4>
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: '1fr 1fr', 
                            gap: '10px', 
                            border: `1px solid ${colors.border}`, 
                            padding: '15px', 
                            borderRadius: '8px',
                            marginBottom: '20px'
                        }}>
                            <p style={{ margin: 0 }}><strong>Novelty:</strong> {selected.novelty}</p>
                            <p style={{ margin: 0 }}><strong>Impact:</strong> {selected.impact}</p>
                            <p style={{ margin: 0 }}><strong>Clarity:</strong> {selected.clarity}</p>
                            <p style={{ margin: 0 }}><strong>AI Depth:</strong> <span style={{ color: colors.primary, fontWeight: 700 }}>{selected.ai_depth.toFixed(1)} / 10</span></p>
                        </div>
                        
                        [cite_start]<h4 style={{ margin: '0 0 10px 0', fontWeight: 600 }}>Manual Adjustment (BTC/BTK) [cite: 49]</h4>
                        <p style={{ color: colors.textLight, fontSize: '13px' }}>
                            [cite_start]Ban Tổ Chức có thể điều chỉnh điểm thủ công nếu cần thiết, dựa trên các yếu tố không định lượng được[cite: 49].
                        </p>
                        <input 
                            type="number" 
                            placeholder="Override Final Score (e.g., 5.0)" 
                            style={{ 
                                width: '100%', 
                                padding: '10px', 
                                border: `1px solid ${colors.border}`, 
                                borderRadius: '6px', 
                                marginBottom: '20px' 
                            }}
                            // Bạn có thể thêm logic useState để lưu điểm chỉnh sửa tại đây
                        />

                        <Button variant="primary" icon={Save} size="md" style={{ marginTop: "16px" }}>
                            Save Evaluation
                        </Button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default BestPaperEvalView;