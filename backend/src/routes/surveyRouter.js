import express from "express";
import * as surveyController from "../controllers/surveyController.js";
import { authenticateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateAdmin, surveyController.createSurvey);
router.get("/active", surveyController.getActiveSurveys);

export default router;