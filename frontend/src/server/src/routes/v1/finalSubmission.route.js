import express from "express";
import finalSubmissionController from "../../controllers/finalSubmission.controller.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/:paperId/upload", upload.single("file"), finalSubmissionController.uploadVersion);
router.put("/versions/:versionId/confirm", finalSubmissionController.confirmFinalVersion);

export default router;
