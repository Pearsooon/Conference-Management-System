import express from "express";
import { validate, confirm, list } from "../../controllers/checkin.controller.js";

const router = express.Router();

router.get("/checkin/validate/:token", validate);
router.post("/checkin/confirm", confirm);
router.get("/checkin/list/:confId", list);

export default router;
