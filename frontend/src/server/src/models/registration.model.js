import db from "../config/database.js";

const Registration = {

    async create(data) {
        const q = `
            INSERT INTO registrations 
                (user_id, conference_id, ticket_id, registration_status)
            VALUES ($1, $2, $3, 'PENDING')
            RETURNING *;
        `;
        const p = [data.userId, data.conferenceId, data.ticketId];
        const r = await db.query(q, p);
        return r.rows[0];
    },

    async approve(regId) {
        const q = `
            UPDATE registrations
            SET registration_status = 'APPROVED'
            WHERE registration_id = $1
            RETURNING *;
        `;
        const r = await db.query(q, [regId]);
        return r.rows[0];
    },

    async reject(regId) {
        const q = `
            UPDATE registrations
            SET registration_status = 'REJECTED'
            WHERE registration_id = $1
            RETURNING *;
        `;
        const r = await db.query(q, [regId]);
        return r.rows[0];
    },

    async generateQR(regId, token) {
        const q = `
            UPDATE registrations
            SET qr_token = $1
            WHERE registration_id = $2
            RETURNING *;
        `;
        const r = await db.query(q, [token, regId]);
        return r.rows[0];
    },

    async getAllByConference(confId) {
        const q = `
            SELECT r.*, u.full_name, t.ticket_name
            FROM registrations r
            JOIN users u ON r.user_id = u.user_id
            JOIN ticket_configs t ON r.ticket_id = t.ticket_id
            WHERE r.conference_id = $1
            ORDER BY r.created_at DESC;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    }
};

export default Registration;
