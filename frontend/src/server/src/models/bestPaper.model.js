import db from "../config/database.js";

const BestPaper = {

    async getBestCandidates(confId) {
        const q = `
            SELECT 
                p.paper_id,
                p.title,
                ROUND(AVG(r.score), 2) AS avg_score,
                COALESCE(m.avg_depth_score, 0) AS ai_depth_score
            FROM papers p
            JOIN reviews r ON p.paper_id = r.paper_id
            LEFT JOIN review_ai_metrics m ON p.paper_id = m.paper_id
            WHERE p.conference_id = $1
            GROUP BY p.paper_id, m.avg_depth_score
            ORDER BY avg_score DESC, ai_depth_score DESC
            LIMIT 10;
        `;
        const r = await db.query(q, [confId]);
        return r.rows;
    },

    async saveAIMetrics(paperId, avgDepthScore, metricsJson) {
        const q = `
            INSERT INTO review_ai_metrics (paper_id, avg_depth_score, metrics)
            VALUES ($1, $2, $3)
            RETURNING *;
        `;
        const r = await db.query(q, [paperId, avgDepthScore, metricsJson]);
        return r.rows[0];
    },

    async setBestPaper(paperId) {
        const q = `
            UPDATE papers
            SET best_paper_candidate = TRUE
            WHERE paper_id = $1
            RETURNING *;
        `;
        const r = await db.query(q, [paperId]);
        return r.rows[0];
    },

    async getReviewsOfPaper(paperId) {
        const q = `
            SELECT comment 
            FROM reviews
            WHERE paper_id = $1;
        `;
        const r = await db.query(q, [paperId]);
        return r.rows.map(x => x.comment);
    }
};

export default BestPaper;
