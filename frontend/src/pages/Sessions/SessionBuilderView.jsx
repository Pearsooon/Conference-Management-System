import React, { useState } from "react";
import { Edit, Lock, Unlock, Play, Save } from "lucide-react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

const SessionBuilderView = ({ colors }) => {
  const [sessions, setSessions] = useState([
    {
      id: 'S1',
      title: 'AI & Machine Learning Applications',
      time: '2025-04-15 09:00',
      room: 'Hall A',
      chair: 'Dr. Smith',
      locked: false,
      papers: []
    },
    {
      id: 'S2',
      title: 'Blockchain & Distributed Systems',
      time: '2025-04-15 11:00',
      room: 'Hall B',
      chair: 'Dr. Johnson',
      locked: false,
      papers: []
    }
  ]);

  const [selectedSession, setSelectedSession] = useState(null);
  const [showSessionModal, setShowSessionModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 28 }}>AI Session Builder</h2>
          <p style={{ margin: 0, color: colors.textLight }}>AI-assisted scheduling for the conference</p>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          <Button colors={colors} variant="secondary">Manual Builder</Button>
          <Button colors={colors} icon={Play}>Run AI Suggestion</Button>
          <Button colors={colors} variant="success" icon={Save}>Save Schedule</Button>
        </div>
      </div>

      {/* Layout */}
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 20 }}>

        {/* Left Config Panel */}
        <div style={{
          background: colors.cardBg,
          padding: 20,
          border: `1px solid ${colors.border}`,
          borderRadius: 12
        }}>
          <h3 style={{ marginTop: 0 }}>Configuration</h3>

          <label>Number of Sessions</label>
          <input type="number" defaultValue="10"
            style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }} />

          <label style={{ marginTop: 12 }}>Duration</label>
          <input type="time" defaultValue="02:00"
            style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }} />

          <label style={{ marginTop: 12 }}>Max Papers</label>
          <input type="number" defaultValue="5"
            style={{ width: "100%", padding: 8, border: `1px solid ${colors.border}`, borderRadius: 6 }} />
        </div>

        {/* Right Sessions List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {sessions.map(session => (
            <div key={session.id} style={{
              background: colors.cardBg,
              padding: 20,
              border: `1px solid ${colors.border}`,
              borderRadius: 12
            }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3 style={{ margin: 0 }}>{session.title}</h3>
                  <p style={{ margin: 0, color: colors.textLight }}>{session.time} — {session.room}</p>
                </div>

                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ padding: 6, border: `1px solid ${colors.border}`, borderRadius: 6 }}
                    onClick={() => { setSelectedSession(session); setShowSessionModal(true); }}>
                    <Edit size={16} />
                  </button>

                  <button
                    style={{ padding: 6, border: `1px solid ${colors.border}`, borderRadius: 6 }}
                    onClick={() => {
                      setSessions(sessions.map(s =>
                        s.id === session.id ? { ...s, locked: !s.locked } : s
                      ));
                    }}>

                    {session.locked ? <Lock size={16} /> : <Unlock size={16} />}
                  </button>
                </div>
              </div>

              <p style={{ marginTop: 12, color: colors.textLight }}>
                {session.papers.length} papers assigned
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showSessionModal} onClose={() => setShowSessionModal(false)} title="Edit Session" colors={colors}>
        <p>ID: {selectedSession?.id}</p>
        <p>Title: {selectedSession?.title}</p>
      </Modal>
    </div>
  );
};

export default SessionBuilderView;
