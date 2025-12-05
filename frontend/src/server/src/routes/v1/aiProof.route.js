import express from "express";
import { runAnalysis, getLogs } from "../../controllers/aiProof.controller.js";

const router = express.Router();

router.post("/papers/versions/:versionId/run-ai-check", runAnalysis);
router.get("/papers/versions/:versionId/ai-logs", getLogs);

export default router;
