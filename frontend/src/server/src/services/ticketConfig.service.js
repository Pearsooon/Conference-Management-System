import TicketConfig from "../models/ticketConfig.model.js";

async function createTicket(data) {
    return await TicketConfig.createTicket(data);
}

async function toggleTicket(ticketId, isActive) {
    const updated = await TicketConfig.updateStatus(ticketId, isActive);
    if (!updated) throw new Error("Ticket not found");
    return updated;
}

async function getTickets(confId) {
    return await TicketConfig.getAllByConference(confId);
}

export default {
    createTicket,
    toggleTicket,
    getTickets,
};
