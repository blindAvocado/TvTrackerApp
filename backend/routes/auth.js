import { Router } from "express";
import checkAuth from "../middleware/checkAuth.js";
import * as AuthController from "../controllers/AuthController.js";

const router = Router();

// Auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", checkAuth, AuthController.logout);
router.get("/me", checkAuth, AuthController.getMe);

export default router;