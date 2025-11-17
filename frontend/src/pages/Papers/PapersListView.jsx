import React, { useState } from "react";
import { Eye, Download, Filter, RefreshCw, Save, Edit, X } from "lucide-react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const PapersListView = ({ colors }) => {
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);

  const papers = [
    {
      id: 'P001',
      title: 'Deep Learning Approaches for Medical Image Analysis',
      authors: 'Smith J., Lee K., Zhang M.',
      track: 'AI & ML',
      keywords: 'deep learning, medical imaging, CNN',
      type: 'Oral',
      status: 'Accepted'
    },
    {
      id: 'P002',
      title: 'Blockchain-based Supply Chain Transparency',
      authors: 'Park S., Anderson M.',
      track: 'Blockchain',
      keywords: 'blockchain, supply chain, smart contracts',
      type: 'Oral',
      status: 'Accepted'
    },
    {
      id: 'P003',
      title: 'Quantum Computing for Optimization Problems',
      authors: 'Chen W., Liu Y.',
      track: 'Quantum Computing',
      keywords: 'quantum computing, optimization, algorithms',
      type: 'Poster',
      status: 'Conditional'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 28 }}>Accepted Papers</h2>
          <p style={{ margin: 0, color: colors.textLight }}>Manage and organize all accepted papers</p>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="ghost" icon={RefreshCw} colors={colors}>Reload</Button>
          <Button variant="secondary" icon={Download} colors={colors} onClick={() => setShowExportModal(true)}>Export</Button>
          <Button variant="primary" icon={Save} colors={colors}>Save</Button>
        </div>
      </div>

      {/* Filters */}
      <div style={{
        background: colors.cardBg,
        padding: 20,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        marginBottom: 24
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <Filter size={18} color={colors.textLight} />
          <span style={{ fontWeight: 600 }}>Filters</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
          <div>
            <label>Author</label>
            <input style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }} />
          </div>
          <div>
            <label>Track</label>
            <select style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }}>
              <option>All Tracks</option>
              <option>AI & ML</option>
              <option>Blockchain</option>
            </select>
          </div>
          <div>
            <label>Status</label>
            <select style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }}>
              <option>All</option>
              <option>Accepted</option>
              <option>Conditional</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{
        background: colors.cardBg,
        border: `1px solid ${colors.border}`,
        borderRadius: 12,
        overflow: "hidden"
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: colors.bg }}>
            <tr>
              {["ID", "Title", "Authors", "Track", "Type", "Status", "Actions"].map((h) => (
                <th key={h} style={{ padding: 16, textAlign: "left", color: colors.textLight }}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {papers.map((paper, idx) => (
              <tr key={paper.id} style={{ borderBottom: `1px solid ${colors.border}` }}>
                <td style={{ padding: 16, color: colors.primary, fontWeight: 600 }}>{paper.id}</td>
                <td style={{ padding: 16 }}>{paper.title}</td>
                <td style={{ padding: 16, color: colors.textLight }}>{paper.authors}</td>
                <td style={{ padding: 16 }}>
                  <span style={{ background: `${colors.primary}15`, padding: "4px 8px", borderRadius: 6, color: colors.primary }}>
                    {paper.track}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{
                    background: paper.type === "Oral" ? `${colors.success}15` : `${colors.warning}15`,
                    padding: "4px 8px",
                    borderRadius: 6,
                    color: paper.type === "Oral" ? colors.success : colors.warning,
                  }}>
                    {paper.type}
                  </span>
                </td>
                <td style={{ padding: 16 }}>
                  <span style={{
                    background: paper.status === "Accepted" ? `${colors.success}15` : `${colors.warning}15`,
                    padding: "4px 8px",
                    borderRadius: 6,
                    color: paper.status === "Accepted" ? colors.success : colors.warning
                  }}>
                    {paper.status}
                  </span>
                </td>

                <td style={{ padding: 16 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      style={{ padding: 6, border: `1px solid ${colors.border}`, borderRadius: 6, cursor: "pointer" }}
                      onClick={() => { setSelectedPaper(paper); setShowDetailPanel(true); }}
                    >
                      <Eye size={16} />
                    </button>

                    <button style={{ padding: 6, border: `1px solid ${colors.border}`, borderRadius: 6, cursor: "pointer" }}>
                      <Download size={16} />
                    </button>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Side Panel */}
      {showDetailPanel && selectedPaper && (
        <div style={{
          position: "fixed",
          right: 0,
          top: 64,
          width: 400,
          height: "calc(100vh - 64px)",
          background: colors.cardBg,
          borderLeft: `1px solid ${colors.border}`,
          overflow: "auto",
          zIndex: 100
        }}>
          <div style={{
            padding: 20,
            borderBottom: `1px solid ${colors.border}`,
            display: "flex",
            justifyContent: "space-between"
          }}>
            <h3 style={{ margin: 0 }}>Paper Details</h3>
            <button style={{ background: "none", border: "none", cursor: "pointer" }}
              onClick={() => setShowDetailPanel(false)}>
              <X size={20} />
            </button>
          </div>

          <div style={{ padding: 20 }}>
            <p><strong>ID:</strong> {selectedPaper.id}</p>
            <p><strong>Title:</strong> {selectedPaper.title}</p>
            <p><strong>Authors:</strong> {selectedPaper.authors}</p>
            <p><strong>Keywords:</strong> {selectedPaper.keywords}</p>

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <Button colors={colors} icon={Download} size="sm">Download</Button>
              <Button colors={colors} variant="secondary" icon={Edit} size="sm">Add Notes</Button>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      <Modal show={showExportModal} onClose={() => setShowExportModal(false)} title="Export Papers" colors={colors}>
        <p>Select format to export:</p>
        <Button colors={colors} variant="primary">Download Excel</Button>
      </Modal>
    </div>
  );
};

export default PapersListView;
