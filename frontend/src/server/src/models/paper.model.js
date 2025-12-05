import db from "../config/database.js";

const PaperModel = {
  async getReviewSummary(confId, statusFilter) {
    let query = `
      SELECT p.paper_id, p.title,
             ROUND(AVG(r.score), 2) AS avg_score,
             CASE 
               WHEN AVG(r.score) >= 4 THEN 'ACCEPTED'
               WHEN AVG(r.score) >= 2.5 THEN 'MINOR_REVISION'
               ELSE 'REJECTED'
             END AS suggested_decision
      FROM papers p
      JOIN reviews r ON p.paper_id = r.paper_id
      WHERE p.conference_id = $1
    `;

    const params = [confId];

    if (statusFilter) {
      query += ` AND p.status = $2`;
      params.push(statusFilter);
    }

    query += ` GROUP BY p.paper_id;`;

    const result = await db.query(query, params);
    return result.rows;
  },

  async updateDecision(paperId, status) {
    await db.query(
      `UPDATE papers SET status = $1, final_decision_date = NOW()
       WHERE paper_id = $2`,
      [status, paperId]
    );
  },

  async getById(paperId) {
    const result = await db.query(
      `SELECT paper_id, title, status FROM papers WHERE paper_id = $1`,
      [paperId]
    );
    return result.rows[0];
  },
};

export default PaperModel;
