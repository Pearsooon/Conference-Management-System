import ticketConfigService from "../services/ticketConfig.service.js";

export async function createTicket(req, res) {
    try {
        const ticket = await ticketConfigService.createTicket(req.body);
        res.status(201).json({ success: true, ticket });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function updateStatus(req, res) {
    try {
        const result = await ticketConfigService.toggleTicket(
            req.params.ticketId,
            req.body.isActive
        );
        res.json({ success: true, ticket: result });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
}

export async function listTickets(req, res) {
    try {
        const items = await ticketConfigService.getTickets(req.params.confId);
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
