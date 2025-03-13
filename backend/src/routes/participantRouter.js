import express from "express";
import * as participantController from "../controllers/participantController.js";

const router = express.Router();

router.post('/register', participantController.registerParticipant);

export default router;