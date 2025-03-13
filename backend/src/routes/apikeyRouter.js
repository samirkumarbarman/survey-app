import express from "express";
import * as apiKeyController from "../controllers/apikeyController.js";
import { authenticateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/generate", authenticateAdmin, apiKeyController.generateApiKey);
router.get("/validate/:apiKey", apiKeyController.validateApiKey);

export default router;