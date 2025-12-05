import aiProofService from "../services/aiProof.service.js";

export async function runAnalysis(req, res) {
    try {
        const versionId = req.params.versionId;
        const result = await aiProofService.runAnalysis(versionId);

        res.json({
            success: true,
            ...result
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export async function getLogs(req, res) {
    try {
        const versionId = req.params.versionId;
        const logs = await aiProofService.getLogs(versionId);

        res.json({ success: true, logs });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
