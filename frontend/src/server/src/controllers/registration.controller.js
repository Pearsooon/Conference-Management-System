import registrationService from "../services/registration.service.js";

export async function create(req, res) {
    try {
        const reg = await registrationService.createRegistration(req.body);
        res.status(201).json({ success: true, registration: reg });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function approve(req, res) {
    try {
        const reg = await registrationService.approveRegistration(req.params.regId);
        res.json({ success: true, registration: reg });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export async function reject(req, res) {
    try {
        const reg = await registrationService.rejectRegistration(req.params.regId);
        res.json({ success: true, registration: reg });
    } catch (err) {
        res.status(404).json({ success: false, error: err.message });
    }
}

export async function generateQr(req, res) {
    try {
        const reg = await registrationService.generateQR(req.params.regId);
        res.json({ success: true, qrToken: reg.qr_token });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

export async function list(req, res) {
    try {
        const items = await registrationService.listRegistrations(req.params.confId);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
