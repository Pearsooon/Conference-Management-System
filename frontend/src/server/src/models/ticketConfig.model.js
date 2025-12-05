import db from "../config/database.js";

const TicketConfig = {
    async createTicket(payload) {
        const q = `
            INSERT INTO ticket_configs (ticket_name, price, quantity_limit, open_time, close_time, is_active)
            VALUES ($1, $2, $3, $4, $5, TRUE)
            RETURNING *;
        `;
        const p = [
            payload.ticketName,
            payload.price,
            payload.quantityLimit,
            payload.openTime,
            payload.closeTime
        ];
        const r = await db.query(q, p);
        return r.rows[0];
    },

    async updateStatus(ticketId, isActive) {
        const q = `
            UPDATE ticket_configs
            SET is_active = $1
            WHERE ticket_id = $2
            RETURNING *;
        `;
        const r = await db.query(q, [isActive, ticketId]);
        return r.rows[0];
    },

    async getAllByConference(confId) {
        const q = `
            SELECT * FROM ticket_configs
            WHERE conference_id = $1
            ORDER BY ticket_id;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    }
};

export default TicketConfig;
