import db from "../config/database.js";

const AICheck = {
    async saveLog(versionId, passed, reportJson) {
        const q = `
            INSERT INTO ai_analysis_logs (version_id, passed, report)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const r = await db.query(q, [versionId, passed, reportJson]);
        return r.rows[0];
    },

    async getLogsByVersion(versionId) {
        const q = `
            SELECT *
            FROM ai_analysis_logs
            WHERE version_id = $1
            ORDER BY created_at DESC;
        `;
        const r = await db.query(q, [versionId]);
        return r.rows;
    },

    async updateVersionFlags(versionId, formatOK, plagiarismOK) {
        const q = `
            UPDATE paper_versions
            SET format_ok = $1,
                plagiarism_safe = $2
            WHERE version_id = $3
            RETURNING *;
        `;
        const r = await db.query(q, [formatOK, plagiarismOK, versionId]);
        return r.rows[0];
    }
};

export default AICheck;
