import db from "../config/database.js";

const EmailModel = {
    async saveLog({
        conferenceId,
        emailTo,
        subject,
        content,
        relatedPaperId = null,
        relatedRegId = null,
    }) {
        const q = `
            INSERT INTO email_logs 
                (conference_id, email_to, subject, content, related_paper_id, related_reg_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const p = [
            conferenceId,
            emailTo,
            subject,
            content,
            relatedPaperId, 
            relatedRegId,
        ];

        const r = await db.query(q, p);
        return r.rows[0];
    },

    async getLogs(confId) {
        const q = `
            SELECT *
            FROM email_logs
            WHERE conference_id = $1
            ORDER BY sent_at DESC;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    }
};

export default EmailModel;
