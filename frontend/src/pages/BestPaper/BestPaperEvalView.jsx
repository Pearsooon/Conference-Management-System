import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Star, Filter, Eye, Save } from "lucide-react";

const BestPaperEvalView = ({ colors }) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const papers = [
    { id: "P001", title: "Medical Imaging with Deep Learning", novelty: 4.5, impact: 4.2, clarity: 4.3 },
    { id: "P002", title: "Blockchain Transparency Systems", novelty: 4.0, impact: 3.8, clarity: 4.1 },
    { id: "P003", title: "Quantum Optimization Models", novelty: 3.8, impact: 4.0, clarity: 3.7 }
  ];

  const computeScore = (p) => ((p.novelty + p.impact + p.clarity) / 3).toFixed(2);

  return (
    <div>
      <h2 style={{ fontSize: "28px", margin: 0 }}>Best Paper Evaluation</h2>
      <p style={{ color: colors.textLight }}>Evaluate papers and select top candidates</p>

      <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: "12px",
        padding: "20px",
        margin: "20px 0"
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
              {["ID", "Title", "Novelty", "Impact", "Clarity", "Avg", "Actions"].map(h => (
                <th key={h} style={{ padding: "16px", color: colors.textLight, textAlign: "left" }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {papers.map((p, idx) => (
              <tr key={p.id} style={{ borderBottom: idx < papers.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                <td style={{ padding: "16px", fontWeight: 600, color: colors.primary }}>{p.id}</td>
                <td style={{ padding: "16px" }}>{p.title}</td>
                <td style={{ padding: "16px" }}>{p.novelty}</td>
                <td style={{ padding: "16px" }}>{p.impact}</td>
                <td style={{ padding: "16px" }}>{p.clarity}</td>
                <td style={{ padding: "16px", fontWeight: 600 }}>{computeScore(p)}</td>
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
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={show} onClose={() => setShow(false)} title="Evaluation Details" colors={colors}>
        {selected && (
          <div>
            <p><strong>ID:</strong> {selected.id}</p>
            <p><strong>Title:</strong> {selected.title}</p>
            <p><strong>Novelty:</strong> {selected.novelty}</p>
            <p><strong>Impact:</strong> {selected.impact}</p>
            <p><strong>Clarity:</strong> {selected.clarity}</p>
            <p><strong>Average Score:</strong> {computeScore(selected)}</p>

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
