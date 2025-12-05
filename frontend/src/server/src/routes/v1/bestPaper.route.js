import express from "express";
import { getCandidates, runAIDepth, finalize } from "../../controllers/bestPaper.controller.js";

const router = express.Router();

router.get("/papers/best-candidates/:confId", getCandidates);
router.post("/papers/:paperId/run-ai-depth", runAIDepth);
router.put("/papers/:paperId/finalize-award", finalize);

export default router;
