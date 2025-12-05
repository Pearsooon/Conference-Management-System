// frontend/src/server/src/routes/v1/submission.route.js

import express from "express";
const router = express.Router();
import submissionController from "../../controllers/submission.controller.js";

/**
 * @swagger
 * tags:
 *   - name: Submission - Review Decisions
 *     description: API Quản lý quyết định & điểm review
 */

/**
 * @swagger
 * /api/v1/papers/decisions/{confId}:
 *   get:
 *     tags:
 *       - Submission - Review Decisions
 *     summary: Tổng hợp điểm review theo hội nghị
 *     parameters:
 *       - in: path
 *         name: confId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lấy dữ liệu thành công
 */
router.get("/decisions/:confId", submissionController.getReviewDecisionsSummary);

/**
 * @swagger
 * /api/v1/papers/decisions/{paperId}:
 *   put:
 *     tags:
 *       - Submission - Review Decisions
 *     summary: Cập nhật quyết định cuối cùng của bài báo
 *     parameters:
 *       - in: path
 *         name: paperId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newStatus:
 *                 type: string
 *                 enum: [ACCEPTED, REJECTED, MINOR_REVISION, MAJOR_REVISION]
 *     responses:
 *       200:
 *         description: Quyết định đã được cập nhật
 */
router.put("/decisions/:paperId", submissionController.updateFinalDecision);

export default router;
