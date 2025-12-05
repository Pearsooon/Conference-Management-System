import express from "express";
import { runAI, list, confirm } from "../../controllers/session.controller.js";

const router = express.Router();

router.post("/sessions/run-ai-propose", runAI);
router.get("/sessions/:confId/list", list);
router.put("/sessions/:sessionId/confirm", confirm);

export default router;
