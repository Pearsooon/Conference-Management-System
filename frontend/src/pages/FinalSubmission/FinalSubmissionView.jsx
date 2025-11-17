import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Upload, Eye, CheckCircle, XCircle } from "lucide-react";

const FinalSubmissionView = ({ colors }) => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const submissions = [
    { id: "P001", title: "Deep Learning for Imaging", author: "Smith J.", status: "Pending", file: "P001_final.pdf" },
    { id: "P002", title: "Blockchain Transparency", author: "Park S.", status: "Approved", file: "P002_final.pdf" },
    { id: "P003", title: "Quantum Optimization", author: "Chen W.", status: "Rejected", file: "P003_final.pdf" }
  ];

  return (
    <div>
      <h2 style={{ fontSize: "28px", margin: 0 }}>Final Submissions</h2>
      <p style={{ color: colors.textLight }}>Manage final uploaded papers</p>

      <div style={{ margin: "20px 0", display: "flex", justifyContent: "flex-end" }}>
        <Button variant="primary" icon={Upload}>Upload Final Version</Button>
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
              {["ID", "Title", "Author", "File", "Status", "Actions"].map((h) => (
                <th key={h} style={{ padding: "16px", color: colors.textLight, textAlign: "left" }}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {submissions.map((s, idx) => (
              <tr key={s.id} style={{ borderBottom: idx < submissions.length - 1 ? `1px solid ${colors.border}` : "none" }}>
                <td style={{ padding: "16px", fontWeight: 600, color: colors.primary }}>{s.id}</td>
                <td style={{ padding: "16px" }}>{s.title}</td>
                <td style={{ padding: "16px" }}>{s.author}</td>
                <td style={{ padding: "16px" }}>{s.file}</td>
                <td style={{ padding: "16px" }}>
                  <span style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background:
                      s.status === "Approved" ? `${colors.success}15` :
                      s.status === "Rejected" ? `${colors.danger}15` :
                      `${colors.warning}15`,
                    color:
                      s.status === "Approved" ? colors.success :
                      s.status === "Rejected" ? colors.danger :
                      colors.warning
                  }}>
                    {s.status}
                  </span>
                </td>
                <td style={{ padding: "16px" }}>
                  <button
                    onClick={() => { setSelected(s); setShow(true); }}
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

      <Modal show={show} onClose={() => setShow(false)} title="Final Submission Preview" colors={colors}>
        {selected && (
          <div>
            <p><strong>ID:</strong> {selected.id}</p>
            <p><strong>Title:</strong> {selected.title}</p>
            <p><strong>Author:</strong> {selected.author}</p>
            <p><strong>File:</strong> {selected.file}</p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Button variant="success" icon={CheckCircle}>Approve</Button>
              <Button variant="danger" icon={XCircle}>Reject</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FinalSubmissionView;
