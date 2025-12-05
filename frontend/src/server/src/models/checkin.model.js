import db from "../config/database.js";

const CheckinModel = {

    async findByToken(token) {
        const q = `
            SELECT r.*, u.full_name, u.email, t.ticket_name
            FROM registrations r
            JOIN users u ON r.user_id = u.user_id
            JOIN ticket_configs t ON r.ticket_id = t.ticket_id
            WHERE r.qr_token = $1;
        `;
        const r = await db.query(q, [token]);
        return r.rows[0];
    },

    async markCheckin(regId) {
        const q = `
            INSERT INTO attendance_log (registration_id)
            VALUES ($1)
            RETURNING *;
        `;
        const r = await db.query(q, [regId]);
        return r.rows[0];
    },

    async getCheckedInList(confId) {
        const q = `
            SELECT 
                a.log_id,
                a.checkin_time,
                u.full_name,
                u.email,
                t.ticket_name
            FROM attendance_log a
            JOIN registrations r ON a.registration_id = r.registration_id
            JOIN users u ON r.user_id = u.user_id
            JOIN ticket_configs t ON r.ticket_id = t.ticket_id
            WHERE r.conference_id = $1
            ORDER BY a.checkin_time DESC;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    }
};

export default CheckinModel;
