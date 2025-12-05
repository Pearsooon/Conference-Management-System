import express from "express";
import { createTicket, updateStatus, listTickets } from "../../controllers/ticketConfig.controller.js";

const router = express.Router();

router.post("/tickets/create", createTicket);
router.put("/tickets/:ticketId/status", updateStatus);
router.get("/tickets/:confId/list", listTickets);

export default router;
