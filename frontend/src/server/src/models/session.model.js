import db from "../config/database.js";

const SessionModel = {

    async createSession(confId, name, description, isAI = true) {
        const q = `
            INSERT INTO sessions (conference_id, name, description, is_ai_generated)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const r = await db.query(q, [confId, name, description, isAI]);
        return r.rows[0];
    },

    async attachPaper(sessionId, paperId, order = 1) {
        const q = `
            INSERT INTO session_papers (session_id, paper_id, order_in_session)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const r = await db.query(q, [sessionId, paperId, order]);
        return r.rows[0];
    },

    async getSessions(confId) {
        const q = `
            SELECT *
            FROM sessions
            WHERE conference_id = $1
            ORDER BY session_id;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    },

    async confirmSession(sessionId, newName, newDesc) {
        const q = `
            UPDATE sessions
            SET name = $1,
                description = $2,
                is_ai_generated = FALSE
            WHERE session_id = $3
            RETURNING *;
        `;
        const r = await db.query(q, [newName, newDesc, sessionId]);
        return r.rows[0];
    }
};

export default SessionModel;
