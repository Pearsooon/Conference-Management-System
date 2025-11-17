import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Filter, Eye } from "lucide-react";

const ReviewDecisionsView = ({ colors }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const reviewDecisions = [
    { id: "P001", title: "Deep Learning for Medical Imaging", avg: 4.2, count: 3, status: "Accepted" },
    { id: "P002", title: "Blockchain for Supply Chain", avg: 3.8, count: 3, status: "Accepted" },
    { id: "P003", title: "Quantum Computing Applications", avg: 3.5, count: 2, status: "Minor Revision" },
    { id: "P004", title: "IoT Security Framework", avg: 2.8, count: 3, status: "Major Revision" }
  ];

  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "28px", margin: 0 }}>Review Decisions</h2>
        <p style={{ color: colors.textLight }}>View reviewer scores and final recommendations</p>
      </div>

      <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "20px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Filter size={18} color={colors.textLight} />
          <span style={{ fontWeight: 600 }}>Filters</span>
        </div>
      </div>

      <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: "12px",
        overflow: "hidden"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: colors.bg }}>
              {["ID", "Title", "Avg Score", "Reviews", "Status", "Actions"].map((h) => (
                <th key={h} style={{
                  padding: "16px",
                  textAlign: "left",
                  color: colors.textLight
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reviewDecisions.map((p, idx) => (
              <tr key={p.id} style={{ borderBottom: idx < reviewDecisions.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                <td style={{ padding: "16px", fontWeight: 600, color: colors.primary }}>{p.id}</td>
                <td style={{ padding: "16px" }}>{p.title}</td>
                <td style={{ padding: "16px" }}>{p.avg}</td>
                <td style={{ padding: "16px" }}>{p.count}</td>
                <td style={{ padding: "16px" }}>
                  <span style={{
                    padding: "4px 10px",
                    background: p.status.includes("Accepted") ? `${colors.success}15` : `${colors.warning}15`,
                    color: p.status.includes("Accepted") ? colors.success : colors.warning,
                    borderRadius: "6px"
                  }}>
                    {p.status}
                  </span>
                </td>
                <td style={{ padding: "16px" }}>
                  <button
                    onClick={() => { setSelectedPaper(p); setShowDetail(true); }}
                    style={{
                      padding: "6px",
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "6px",
                      cursor: "pointer"
                    }}
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showDetail} onClose={() => setShowDetail(false)} title="Review Summary" colors={colors}>
        {selectedPaper && (
          <div>
            <div style={{ marginBottom: "16px" }}>
              <strong>ID:</strong> {selectedPaper.id}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Title:</strong> {selectedPaper.title}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Average Score:</strong> {selectedPaper.avg}
            </div>
            <div style={{ marginBottom: "16px" }}>
              <strong>Review Count:</strong> {selectedPaper.count}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReviewDecisionsView;
