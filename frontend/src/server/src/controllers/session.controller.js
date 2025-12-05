import sessionService from "../services/session.service.js";

export async function runAI(req, res) {
    try {
        const result = await sessionService.runAIPropose(req.body.confId);
        res.json({ success: true, sessions: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function list(req, res) {
    try {
        const items = await sessionService.listSessions(req.params.confId);
        res.json({ success: true, sessions: items });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export async function confirm(req, res) {
    try {
        const updated = await sessionService.confirmSession(req.params.sessionId, req.body);
        res.json({ success: true, session: updated });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}
