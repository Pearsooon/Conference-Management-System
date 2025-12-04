import React, { useState } from "react";
import Button from "../../../ui/Button";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

const PrePublishCheckView = ({ colors }) => {
  const [results, setResults] = useState(null);

  const runCheck = () => {
    setResults([
      { id: 1, name: "Metadata completeness", status: "OK" },
      { id: 2, name: "Missing files", status: "FAIL" },
      { id: 3, name: "PDF format compliance", status: "OK" },
      { id: 4, name: "Plagiarism scan", status: "OK" }
    ]);
  };

  return (
    <div>
      <h2 style={{ fontSize: "28px", margin: 0 }}>Pre-Publish Check</h2>
      <p style={{ color: colors.textLight }}>Automatic validation before publication</p>

      <Button variant="primary" icon={RefreshCw} onClick={runCheck} size="md" style={{ margin: "20px 0" }}>
        Run Check
      </Button>

      {results && (
        <div style={{
          background: colors.cardBg,
          border: `1px solid ${colors.border}`,
          borderRadius: "12px",
          overflow: "hidden"
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: colors.bg }}>
                {["Check", "Status"].map(h => (
                  <th key={h} style={{ padding: "16px", color: colors.textLight, textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {results.map(r => (
                <tr key={r.id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                  <td style={{ padding: "16px" }}>{r.name}</td>
                  <td style={{ padding: "16px" }}>
                    {r.status === "OK" ? (
                      <span style={{ color: colors.success, display: "flex", alignItems: "center", gap: "6px" }}>
                        <CheckCircle size={16} /> OK
                      </span>
                    ) : (
                      <span style={{ color: colors.danger, display: "flex", alignItems: "center", gap: "6px" }}>
                        <XCircle size={16} /> FAIL
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PrePublishCheckView;
