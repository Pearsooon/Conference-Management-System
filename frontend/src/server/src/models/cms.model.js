import db from "../config/database.js";

const CMS = {
    async create(data) {
        const q = `
            INSERT INTO cms_contents
                (conference_id, title, body, content_type, scheduled_publish_time)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const p = [
            data.conferenceId,
            data.title,
            data.body,
            data.contentType,
            data.scheduledPublishTime || null
        ];
        const r = await db.query(q, p);
        return r.rows[0];
    },

    async publish(contentId) {
        const q = `
            UPDATE cms_contents
            SET is_published = TRUE,
                updated_at = NOW()
            WHERE content_id = $1
            RETURNING *;
        `;
        const r = await db.query(q, [contentId]);
        return r.rows[0];
    },

    async getContents(confId) {
        const q = `
            SELECT *
            FROM cms_contents
            WHERE conference_id = $1
            ORDER BY created_at DESC;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    }
};

export default CMS;
