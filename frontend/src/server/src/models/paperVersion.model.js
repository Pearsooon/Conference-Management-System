import db from "../config/database.js";

const PaperVersion = {
    db,

    async getVersionById(versionId) {
        const q = `SELECT * FROM paper_versions WHERE version_id = $1`;
        const r = await db.query(q, [versionId]);
        return r.rows[0];
    },

    async getNextVersionNumber(paperId) {
        const q = `
            SELECT COALESCE(MAX(version_number), 0) + 1 AS next_version
            FROM paper_versions
            WHERE paper_id = $1
        `;
        const r = await db.query(q, [paperId]);
        return r.rows[0].next_version;
    },

    async unsetOtherFinals(paperId) {
        await db.query(`
            UPDATE paper_versions
            SET is_final = FALSE
            WHERE paper_id = $1
        `, [paperId]);
    },

    async markAsFinal(versionId) {
        const q = `
            UPDATE paper_versions
            SET is_final = TRUE
            WHERE version_id = $1
            RETURNING *;
        `;
        const r = await db.query(q, [versionId]);
        return r.rows[0];
    }
};

export default PaperVersion;
