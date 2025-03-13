import express from "express";
import * as adminController from "../controllers/adminController.js";
import { authenticateAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/register', adminController.registerAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/adminProfile', authenticateAdmin, adminController.getAdminProfile);

export default router;