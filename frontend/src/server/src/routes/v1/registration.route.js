import express from "express";
import {
    create,
    approve,
    reject,
    generateQr,
    list
} from "../../controllers/registration.controller.js";

const router = express.Router();

router.post("/registrations", create);
router.put("/registrations/:regId/approve", approve);
router.put("/registrations/:regId/reject", reject);
router.get("/registrations/:regId/generate-qr", generateQr);
router.get("/registrations/:confId/list", list);

export default router;
