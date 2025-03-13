import express from "express";
import * as responseController from "../controllers/responseController.js";

const router = express.Router();

router.post("/", responseController.submitResponse);
router.get("/:surveyId/results", responseController.getSurveyResults);

export default router;