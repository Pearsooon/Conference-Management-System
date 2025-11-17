import React, { useState } from "react";
import Button from "../../ui/Button";
import { Upload, Send, FileText } from "lucide-react";
import Modal from "../../ui/Modal";

const AiProofreadView = ({ colors }) => {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
    setShow(true);
  };

  return (
    <div>
      <h2 style={{ fontSize: "28px", margin: 0 }}>AI Proofreading</h2>
      <p style={{ color: colors.textLight }}>Upload your paper and let AI detect grammar issues</p>

      <label
        style={{
          marginTop: "20px",
          padding: "16px",
          border: `2px dashed ${colors.border}`,
          borderRadius: "12px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px"
        }}
      >
        <Upload />
        <span>Select PDF to upload</span>
        <input type="file" style={{ display: "none" }} onChange={handleUpload} />
      </label>

      <Modal show={show} onClose={() => setShow(false)} title="AI Proofreading Result" colors={colors}>
        <div>
          <p>
            <FileText size={16} style={{ marginRight: "6px" }} />
            <strong>{file ? file.name : ""}</strong>
          </p>

          <h4 style={{ marginTop: "20px" }}>AI Suggestions:</h4>

          <ul style={{ lineHeight: "1.8" }}>
            <li>Improve sentence clarity here...</li>
            <li>Possible grammar issue: “an algorithm which…” → “an algorithm that…”</li>
            <li>Consider simplifying the sentence in paragraph 3...</li>
          </ul>

          <Button variant="primary" icon={Send} size="md" style={{ marginTop: "16px" }}>
            Generate Revised PDF
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default AiProofreadView;
