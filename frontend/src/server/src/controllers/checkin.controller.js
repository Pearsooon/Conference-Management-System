import checkinService from "../services/checkin.service.js";

export async function validate(req, res) {
    try {
        const reg = await checkinService.validateToken(req.params.token);
        res.json({ success: true, registration: reg });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export async function confirm(req, res) {
    try {
        const log = await checkinService.confirmCheckin(req.body.registrationId);
        res.json({ success: true, checkin: log });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function list(req, res) {
    try {
        const items = await checkinService.listCheckins(req.params.confId);
        res.json({ success: true, attendees: items });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}
