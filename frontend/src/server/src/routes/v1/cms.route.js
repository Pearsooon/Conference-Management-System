import express from "express";
import { create, publish, list } from "../../controllers/cms.controller.js";

const router = express.Router();

router.post("/cms/content/create", create);
router.put("/cms/content/:contentId/publish", publish);
router.get("/cms/content/:confId/list", list);

export default router;
