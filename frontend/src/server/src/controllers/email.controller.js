import emailService from "../services/email.service.js";

export async function sendDecision(req, res) {
    try {
        const log = await emailService.sendDecisionEmail(req.body);
        res.json({ success: true, log });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export async function sendThankyou(req, res) {
    try {
        const log = await emailService.sendThankYouEmail(req.body);
        res.json({ success: true, log });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export async function getLogs(req, res) {
    try {
        const logs = await emailService.getLogs(req.params.confId);
        res.json({ success: true, logs });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
