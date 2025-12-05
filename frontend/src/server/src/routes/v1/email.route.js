import express from "express";
import { sendDecision, sendThankyou, getLogs } from "../../controllers/email.controller.js";

const router = express.Router();

router.post("/emails/send-decision", sendDecision);
router.post("/emails/send-thankyou", sendThankyou);
router.get("/emails/logs/:confId", getLogs);

export default router;
